
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ProductSearch from '@/components/ProductSearch';
import ProductList from '@/components/ProductList';
import { loadList, saveList, ListItem } from '@/lib/productData';

const Index = () => {
  const [shoppingList, setShoppingList] = useState<ListItem[]>([]);
  const [listUpdated, setListUpdated] = useState(false);

  // Load list from localStorage on initial render
  useEffect(() => {
    const savedList = loadList();
    setShoppingList(savedList);
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    if (listUpdated) {
      saveList(shoppingList);
      setListUpdated(false);
    }
  }, [shoppingList, listUpdated]);

  // Add product to shopping list
  const handleAddToList = (product: ListItem) => {
    setShoppingList(prevList => {
      // Check if product already exists in list
      const existingItem = prevList.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increment quantity if product already exists
        return prevList.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new product to list
        return [...prevList, product];
      }
    });
    setListUpdated(true);
  };

  // Update shopping list
  const handleUpdateList = (updatedList: ListItem[]) => {
    setShoppingList(updatedList);
    setListUpdated(true);
  };

  // Handle when prices are updated
  const handlePricesUpdated = () => {
    // Reload the list to reflect updated prices
    const savedList = loadList();
    setShoppingList(savedList);
    setListUpdated(true);
  };

  return (
    <div className="min-h-screen bg-listBg">
      <Header onPricesUpdated={handlePricesUpdated} />
      
      <main className="container px-4 mx-auto pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductSearch onAddToList={handleAddToList} />
            <ProductList 
              items={shoppingList} 
              onUpdateList={handleUpdateList} 
            />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-semibold mb-4 list-heading">О проекте</h2>
            <p className="text-gray-600 mb-4">
              Это приложение для создания списка покупок позволяет искать и добавлять продукты, 
              отслеживать их цены, организовывать по категориям и рассчитывать общую стоимость.
            </p>
            
            <h3 className="font-medium text-lg mb-2">Функции:</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>Поиск продуктов</li>
              <li>Добавление своих продуктов</li>
              <li>Обновление цен</li>
              <li>Расчет стоимости покупок</li>
              <li>Сохранение списка</li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Индивидуальный проект 11 класс
              </p>
              <p className="text-sm text-gray-500">
                МОБУ СОШ №1
              </p>
              <p className="text-sm font-medium mt-1">
                Автор: Скопинцев Михаил Николаевич
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
