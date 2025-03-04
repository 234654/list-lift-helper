
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { fetchPrices } from '@/lib/productData';
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  onPricesUpdated: () => void;
}

const Header = ({ onPricesUpdated }: HeaderProps) => {
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdatePrices = async () => {
    setIsUpdating(true);
    toast({
      title: "Обновление цен",
      description: "Получение актуальных цен...",
      duration: 2000,
    });
    
    try {
      await fetchPrices();
      toast({
        title: "Успешно",
        description: "Цены успешно обновлены",
        duration: 3000,
      });
      onPricesUpdated();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить цены",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <header className="bg-white shadow-sm py-4 mb-6 transition-all duration-300">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold text-listText animate-fade-in">Список продуктов</h1>
            <p className="text-sm text-gray-500 mt-1">Индивидуальный проект 11 класс, МОБУ СОШ №1</p>
            <p className="text-xs text-gray-400">Автор: Скопинцев Михаил Николаевич</p>
          </div>
          <Button 
            onClick={handleUpdatePrices} 
            disabled={isUpdating}
            className="bg-listBlue hover:bg-blue-600 text-white transition-all duration-200 flex items-center gap-2 px-4 py-2 rounded"
          >
            <RefreshCw className={`h-4 w-4 ${isUpdating ? 'animate-spin' : ''}`} />
            {isUpdating ? 'Обновление...' : 'Обновить цены'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
