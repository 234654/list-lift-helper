
import { useState, useEffect, useRef } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, searchProducts, productDatabase, Product, ListItem, generateId } from '@/lib/productData';

interface ProductSearchProps {
  onAddToList: (product: ListItem) => void;
}

const ProductSearch = ({ onAddToList }: ProductSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const results = searchProducts(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Handle category click
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSearchResults([]);
    } else {
      setSelectedCategory(category);
      const results = productDatabase.filter(product => product.category === category);
      setSearchResults(results);
    }
  };

  // Add product to shopping list
  const handleAddProduct = (product: Product) => {
    const newItem: ListItem = {
      ...product,
      quantity: 1,
      checked: false,
    };
    onAddToList(newItem);
  };

  // Add custom product to list
  const handleAddCustomProduct = () => {
    if (searchQuery.trim()) {
      const customProduct: ListItem = {
        id: generateId(),
        name: searchQuery,
        category: 'Другое',
        price: 0,
        unit: 'шт',
        quantity: 1,
        checked: false,
      };
      onAddToList(customProduct);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-8 animate-fade-in" ref={searchRef}>
      <div className="search-container bg-white rounded-lg p-4 mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Поиск продуктов..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            className="pl-10 py-3 w-full border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {(isSearchFocused || searchResults.length > 0) && (
          <div className="mt-4 search-results max-h-80 overflow-y-auto rounded-md shadow-md border border-gray-100 animate-slide-in">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                {searchResults.map(product => (
                  <Card key={product.id} className="product-card flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        <span className="text-sm font-semibold text-listBlue">
                          {product.price.toFixed(2)} ₽/{product.unit}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddProduct(product)}
                      className="h-8 w-8 p-0 rounded-full bg-listGreen hover:bg-green-600"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </Card>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="p-4 text-center">
                <p className="text-gray-500 mb-2">Продукт не найден</p>
                <Button 
                  onClick={handleAddCustomProduct}
                  className="bg-listBlue hover:bg-blue-600 text-white"
                >
                  Добавить "{searchQuery}"
                </Button>
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                Начните вводить название продукта...
              </div>
            )}
          </div>
        )}
      </div>

      <div className="categories-container">
        <h3 className="text-md font-medium mb-3 text-gray-600">Категории:</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer text-sm py-1 px-3 ${
                selectedCategory === category 
                  ? "bg-listBlue hover:bg-blue-600" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
