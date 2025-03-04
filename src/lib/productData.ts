
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image?: string;
}

export interface ListItem extends Product {
  quantity: number;
  checked: boolean;
}

// Helper to generate a unique ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Common product categories
export const categories = [
  'Овощи',
  'Фрукты',
  'Молочные продукты',
  'Мясо',
  'Рыба',
  'Хлебобулочные изделия',
  'Напитки',
  'Сладости',
  'Крупы',
  'Замороженные продукты',
  'Консервы',
  'Соусы',
  'Снеки',
  'Бытовая химия'
];

// Sample product database (100 products)
export const productDatabase: Product[] = [
  { id: generateId(), name: 'Картофель', category: 'Овощи', price: 35.50, unit: 'кг' },
  { id: generateId(), name: 'Морковь', category: 'Овощи', price: 40.90, unit: 'кг' },
  { id: generateId(), name: 'Лук', category: 'Овощи', price: 29.80, unit: 'кг' },
  { id: generateId(), name: 'Помидоры', category: 'Овощи', price: 159.90, unit: 'кг' },
  { id: generateId(), name: 'Огурцы', category: 'Овощи', price: 129.90, unit: 'кг' },
  { id: generateId(), name: 'Яблоки', category: 'Фрукты', price: 109.50, unit: 'кг' },
  { id: generateId(), name: 'Бананы', category: 'Фрукты', price: 89.90, unit: 'кг' },
  { id: generateId(), name: 'Апельсины', category: 'Фрукты', price: 119.90, unit: 'кг' },
  { id: generateId(), name: 'Мандарины', category: 'Фрукты', price: 149.90, unit: 'кг' },
  { id: generateId(), name: 'Молоко', category: 'Молочные продукты', price: 89.90, unit: 'л' },
  { id: generateId(), name: 'Сметана', category: 'Молочные продукты', price: 69.90, unit: '250г' },
  { id: generateId(), name: 'Творог', category: 'Молочные продукты', price: 109.90, unit: '250г' },
  { id: generateId(), name: 'Сыр', category: 'Молочные продукты', price: 349.90, unit: '250г' },
  { id: generateId(), name: 'Йогурт', category: 'Молочные продукты', price: 49.90, unit: 'шт' },
  { id: generateId(), name: 'Говядина', category: 'Мясо', price: 499.90, unit: 'кг' },
  { id: generateId(), name: 'Свинина', category: 'Мясо', price: 399.90, unit: 'кг' },
  { id: generateId(), name: 'Курица', category: 'Мясо', price: 299.90, unit: 'кг' },
  { id: generateId(), name: 'Фарш', category: 'Мясо', price: 349.90, unit: 'кг' },
  { id: generateId(), name: 'Минтай', category: 'Рыба', price: 259.90, unit: 'кг' },
  { id: generateId(), name: 'Треска', category: 'Рыба', price: 359.90, unit: 'кг' },
  { id: generateId(), name: 'Сельдь', category: 'Рыба', price: 219.90, unit: 'кг' },
  { id: generateId(), name: 'Хлеб белый', category: 'Хлебобулочные изделия', price: 39.90, unit: 'шт' },
  { id: generateId(), name: 'Батон', category: 'Хлебобулочные изделия', price: 45.90, unit: 'шт' },
  { id: generateId(), name: 'Хлеб ржаной', category: 'Хлебобулочные изделия', price: 49.90, unit: 'шт' },
  { id: generateId(), name: 'Вода питьевая', category: 'Напитки', price: 29.90, unit: 'л' },
  { id: generateId(), name: 'Сок апельсиновый', category: 'Напитки', price: 119.90, unit: 'л' },
  { id: generateId(), name: 'Кола', category: 'Напитки', price: 99.90, unit: 'л' },
  { id: generateId(), name: 'Чай черный', category: 'Напитки', price: 159.90, unit: '100г' },
  { id: generateId(), name: 'Кофе растворимый', category: 'Напитки', price: 299.90, unit: '100г' },
  { id: generateId(), name: 'Конфеты', category: 'Сладости', price: 399.90, unit: 'кг' },
  { id: generateId(), name: 'Шоколад', category: 'Сладости', price: 129.90, unit: '100г' },
  { id: generateId(), name: 'Печенье', category: 'Сладости', price: 139.90, unit: '250г' },
  { id: generateId(), name: 'Мороженое', category: 'Сладости', price: 89.90, unit: 'шт' },
  { id: generateId(), name: 'Гречка', category: 'Крупы', price: 109.90, unit: 'кг' },
  { id: generateId(), name: 'Рис', category: 'Крупы', price: 89.90, unit: 'кг' },
  { id: generateId(), name: 'Овсянка', category: 'Крупы', price: 69.90, unit: 'кг' },
  { id: generateId(), name: 'Макароны', category: 'Крупы', price: 79.90, unit: 'кг' },
  { id: generateId(), name: 'Пельмени', category: 'Замороженные продукты', price: 259.90, unit: 'кг' },
  { id: generateId(), name: 'Вареники', category: 'Замороженные продукты', price: 229.90, unit: 'кг' },
  { id: generateId(), name: 'Замороженные овощи', category: 'Замороженные продукты', price: 169.90, unit: 'кг' },
  // Дополним список до 100 продуктов
  { id: generateId(), name: 'Сахар', category: 'Крупы', price: 55.90, unit: 'кг' },
  { id: generateId(), name: 'Соль', category: 'Крупы', price: 19.90, unit: 'кг' },
  { id: generateId(), name: 'Перец молотый', category: 'Специи', price: 99.90, unit: '50г' },
  { id: generateId(), name: 'Лавровый лист', category: 'Специи', price: 29.90, unit: '10г' },
  { id: generateId(), name: 'Корица', category: 'Специи', price: 59.90, unit: '50г' },
  { id: generateId(), name: 'Масло подсолнечное', category: 'Масла', price: 109.90, unit: 'л' },
  { id: generateId(), name: 'Масло оливковое', category: 'Масла', price: 399.90, unit: '500мл' },
  { id: generateId(), name: 'Масло сливочное', category: 'Молочные продукты', price: 159.90, unit: '100г' },
  { id: generateId(), name: 'Майонез', category: 'Соусы', price: 99.90, unit: '250г' },
  { id: generateId(), name: 'Кетчуп', category: 'Соусы', price: 89.90, unit: '250г' },
  { id: generateId(), name: 'Горчица', category: 'Соусы', price: 69.90, unit: '100г' },
  { id: generateId(), name: 'Рыбные консервы', category: 'Консервы', price: 119.90, unit: 'шт' },
  { id: generateId(), name: 'Мясные консервы', category: 'Консервы', price: 149.90, unit: 'шт' },
  { id: generateId(), name: 'Зеленый горошек', category: 'Консервы', price: 59.90, unit: 'шт' },
  { id: generateId(), name: 'Кукуруза консервированная', category: 'Консервы', price: 69.90, unit: 'шт' },
  { id: generateId(), name: 'Фасоль консервированная', category: 'Консервы', price: 79.90, unit: 'шт' },
  { id: generateId(), name: 'Грибы маринованные', category: 'Консервы', price: 149.90, unit: 'шт' },
  { id: generateId(), name: 'Яйца', category: 'Молочные продукты', price: 89.90, unit: '10шт' },
  { id: generateId(), name: 'Мёд', category: 'Сладости', price: 299.90, unit: '250г' },
  { id: generateId(), name: 'Варенье', category: 'Сладости', price: 179.90, unit: '250г' },
  { id: generateId(), name: 'Джем', category: 'Сладости', price: 159.90, unit: '250г' },
  { id: generateId(), name: 'Пряники', category: 'Сладости', price: 119.90, unit: '250г' },
  { id: generateId(), name: 'Зефир', category: 'Сладости', price: 129.90, unit: '250г' },
  { id: generateId(), name: 'Чипсы', category: 'Снеки', price: 119.90, unit: '150г' },
  { id: generateId(), name: 'Сухарики', category: 'Снеки', price: 59.90, unit: '100г' },
  { id: generateId(), name: 'Семечки', category: 'Снеки', price: 69.90, unit: '100г' },
  { id: generateId(), name: 'Орехи', category: 'Снеки', price: 249.90, unit: '150г' },
  { id: generateId(), name: 'Виноград', category: 'Фрукты', price: 289.90, unit: 'кг' },
  { id: generateId(), name: 'Груши', category: 'Фрукты', price: 169.90, unit: 'кг' },
  { id: generateId(), name: 'Персики', category: 'Фрукты', price: 199.90, unit: 'кг' },
  { id: generateId(), name: 'Арбуз', category: 'Фрукты', price: 69.90, unit: 'кг' },
  { id: generateId(), name: 'Дыня', category: 'Фрукты', price: 89.90, unit: 'кг' },
  { id: generateId(), name: 'Капуста', category: 'Овощи', price: 29.90, unit: 'кг' },
  { id: generateId(), name: 'Баклажаны', category: 'Овощи', price: 179.90, unit: 'кг' },
  { id: generateId(), name: 'Кабачки', category: 'Овощи', price: 89.90, unit: 'кг' },
  { id: generateId(), name: 'Перец болгарский', category: 'Овощи', price: 199.90, unit: 'кг' },
  { id: generateId(), name: 'Чеснок', category: 'Овощи', price: 189.90, unit: 'кг' },
  { id: generateId(), name: 'Свекла', category: 'Овощи', price: 39.90, unit: 'кг' },
  { id: generateId(), name: 'Редис', category: 'Овощи', price: 99.90, unit: 'пучок' },
  { id: generateId(), name: 'Зелень', category: 'Овощи', price: 59.90, unit: 'пучок' },
  { id: generateId(), name: 'Салат', category: 'Овощи', price: 89.90, unit: 'шт' },
  { id: generateId(), name: 'Лимоны', category: 'Фрукты', price: 159.90, unit: 'кг' },
  { id: generateId(), name: 'Киви', category: 'Фрукты', price: 189.90, unit: 'кг' },
  { id: generateId(), name: 'Ананас', category: 'Фрукты', price: 299.90, unit: 'шт' },
  { id: generateId(), name: 'Манго', category: 'Фрукты', price: 349.90, unit: 'шт' },
  { id: generateId(), name: 'Авокадо', category: 'Фрукты', price: 159.90, unit: 'шт' },
  { id: generateId(), name: 'Кефир', category: 'Молочные продукты', price: 79.90, unit: 'л' },
  { id: generateId(), name: 'Ряженка', category: 'Молочные продукты', price: 69.90, unit: '500мл' },
  { id: generateId(), name: 'Сгущенное молоко', category: 'Молочные продукты', price: 109.90, unit: 'шт' },
  { id: generateId(), name: 'Колбаса вареная', category: 'Мясо', price: 299.90, unit: 'кг' },
  { id: generateId(), name: 'Колбаса копченая', category: 'Мясо', price: 499.90, unit: 'кг' },
  { id: generateId(), name: 'Сосиски', category: 'Мясо', price: 279.90, unit: 'кг' },
  { id: generateId(), name: 'Сардельки', category: 'Мясо', price: 299.90, unit: 'кг' },
  { id: generateId(), name: 'Ветчина', category: 'Мясо', price: 389.90, unit: 'кг' },
  { id: generateId(), name: 'Рыбные палочки', category: 'Рыба', price: 199.90, unit: '300г' },
  { id: generateId(), name: 'Креветки', category: 'Рыба', price: 699.90, unit: 'кг' },
  { id: generateId(), name: 'Кальмары', category: 'Рыба', price: 359.90, unit: 'кг' },
  { id: generateId(), name: 'Лаваш', category: 'Хлебобулочные изделия', price: 69.90, unit: 'шт' },
  { id: generateId(), name: 'Тортилья', category: 'Хлебобулочные изделия', price: 89.90, unit: '6шт' },
  { id: generateId(), name: 'Булочки', category: 'Хлебобулочные изделия', price: 49.90, unit: '3шт' },
  { id: generateId(), name: 'Слойки', category: 'Хлебобулочные изделия', price: 59.90, unit: '2шт' },
  { id: generateId(), name: 'Пиво', category: 'Напитки', price: 89.90, unit: '0.5л' },
  { id: generateId(), name: 'Вино', category: 'Напитки', price: 399.90, unit: '0.75л' },
  { id: generateId(), name: 'Квас', category: 'Напитки', price: 69.90, unit: 'л' }
];

// Default initial shopping list (empty)
export const initialShoppingList: ListItem[] = [];

// Function to simulate fetching prices from bdex.ru
export const fetchPrices = async (): Promise<void> => {
  // In a real app, this would make an API call to bdex.ru
  // For this demo, we'll simulate an update by randomly adjusting prices
  console.log("Fetching latest prices...");
  
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Update prices with random fluctuations
      productDatabase.forEach(product => {
        const fluctuation = Math.random() * 0.1 - 0.05; // -5% to +5%
        product.price = Math.round((product.price * (1 + fluctuation)) * 100) / 100;
      });
      console.log("Prices updated successfully!");
      resolve();
    }, 1500);
  });
};

// Search function
export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase().trim();
  return productDatabase.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to get products by category
export const getProductsByCategory = (categoryName: string): Product[] => {
  return productDatabase.filter(product => product.category === categoryName);
};

export const saveList = (list: ListItem[]): void => {
  localStorage.setItem('shoppingList', JSON.stringify(list));
};

export const loadList = (): ListItem[] => {
  const saved = localStorage.getItem('shoppingList');
  return saved ? JSON.parse(saved) : initialShoppingList;
};
