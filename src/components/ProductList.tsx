
import { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, Check, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListItem } from '@/lib/productData';
import { Separator } from "@/components/ui/separator";

interface ProductListProps {
  items: ListItem[];
  onUpdateList: (updatedList: ListItem[]) => void;
}

const ProductList = ({ items, onUpdateList }: ProductListProps) => {
  const [list, setList] = useState<ListItem[]>(items);

  // Update local state when props change
  useEffect(() => {
    setList(items);
  }, [items]);

  // Calculate total price
  const getTotalPrice = () => {
    return list.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Update item quantity
  const updateQuantity = (id: string, amount: number) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + amount);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setList(updatedList);
    onUpdateList(updatedList);
  };

  // Toggle item checked state
  const toggleChecked = (id: string) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setList(updatedList);
    onUpdateList(updatedList);
  };

  // Remove item from list
  const removeItem = (id: string) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
    onUpdateList(updatedList);
  };

  // Clear shopping list
  const clearList = () => {
    setList([]);
    onUpdateList([]);
  };

  // Get checked items count
  const getCheckedCount = () => {
    return list.filter(item => item.checked).length;
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold list-heading">Мой список покупок</h2>
        {list.length > 0 && (
          <Button 
            onClick={clearList}
            variant="outline" 
            className="text-red-500 hover:text-red-700 hover:bg-red-50 border-red-200"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Очистить список
          </Button>
        )}
      </div>

      {list.length === 0 ? (
        <Card className="p-8 text-center bg-gray-50 border border-dashed border-gray-200">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500">Ваш список покупок пуст</p>
          <p className="text-sm text-gray-400 mt-2">Найдите и добавьте продукты выше</p>
        </Card>
      ) : (
        <div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
            {list.map((item, index) => (
              <div key={item.id} className="list-item-appear">
                <div className={`flex items-center p-4 ${item.checked ? 'bg-gray-50' : 'bg-white'}`}>
                  <Button
                    onClick={() => toggleChecked(item.id)}
                    variant="ghost"
                    className={`h-8 w-8 p-0 rounded-full mr-3 ${
                      item.checked 
                        ? 'bg-listGreen text-white' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex-1">
                    <p className={`font-medium ${item.checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      {item.name}
                    </p>
                    <div className="flex items-center mt-1 space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      {item.price > 0 && (
                        <span className="text-sm font-semibold text-listBlue">
                          {item.price.toFixed(2)} ₽/{item.unit}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => updateQuantity(item.id, -1)}
                      variant="ghost"
                      className="h-8 w-8 p-0 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="text-gray-800 w-8 text-center">
                      {item.quantity}
                    </span>
                    
                    <Button
                      onClick={() => updateQuantity(item.id, 1)}
                      variant="ghost"
                      className="h-8 w-8 p-0 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="ghost"
                      className="h-8 w-8 p-0 rounded-full text-red-500 hover:bg-red-50 ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {index < list.length - 1 && <Separator />}
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Всего товаров:</span>
              <span className="font-medium">{list.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Отмечено:</span>
              <span className="font-medium">{getCheckedCount()} из {list.length}</span>
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Итого:</span>
              <span className="text-lg font-bold text-listBlue">{getTotalPrice().toFixed(2)} ₽</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
