
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProverbCard from "@/components/ProverbCard";

// Sample data - in a real application this would come from a database or API
const proverbs = [
  {
    proverb: "Тише едешь — дальше будешь",
    meaning: "Призыв к терпению и осторожности: если действовать не спеша и вдумчиво, можно достичь больших результатов.",
    category: "Мудрость"
  },
  {
    proverb: "Без труда не выловишь и рыбку из пруда",
    meaning: "Для достижения результата необходимо приложить усилия; ничто не дается без труда.",
    category: "Труд"
  },
  {
    proverb: "Не имей сто рублей, а имей сто друзей",
    meaning: "Дружба и хорошие отношения с людьми ценнее материальных богатств.",
    category: "Дружба"
  },
  {
    proverb: "Семь раз отмерь — один раз отрежь",
    meaning: "Прежде чем сделать что-то важное, нужно всё тщательно продумать.",
    category: "Осторожность"
  },
  {
    proverb: "Москва не сразу строилась",
    meaning: "Большие дела требуют времени и терпения; нельзя ожидать немедленных результатов в сложных начинаниях.",
    category: "Терпение"
  },
  {
    proverb: "Век живи — век учись",
    meaning: "Учиться никогда не поздно; человек должен получать новые знания на протяжении всей жизни.",
    category: "Образование"
  },
  {
    proverb: "В гостях хорошо, а дома лучше",
    meaning: "Как бы хорошо ни было в чужих краях, дома всегда комфортнее и приятнее.",
    category: "Дом"
  },
  {
    proverb: "Дело мастера боится",
    meaning: "Опытный человек справится с любой трудностью в своём деле.",
    category: "Труд"
  }
];

const categories = ["Все", "Мудрость", "Труд", "Дружба", "Осторожность", "Терпение", "Образование", "Дом"];

const Dictionary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProverbs = proverbs.filter(
    (proverb) =>
      (selectedCategory === "Все" || proverb.category === selectedCategory) &&
      (proverb.proverb.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proverb.meaning.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-playfair text-russian-blue">Словарь пословиц и поговорок</h1>
        <p className="text-muted-foreground">
          Исследуйте богатство русской народной мудрости в нашей коллекции пословиц и поговорок
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Поиск пословиц и поговорок..."
            className="pl-10 border-russian-gold/30"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="md:w-64">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="border-russian-gold/30">
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Категория" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {filteredProverbs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProverbs.map((proverb, index) => (
            <ProverbCard
              key={index}
              proverb={proverb.proverb}
              meaning={proverb.meaning}
              category={proverb.category}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            Ничего не найдено. Попробуйте изменить параметры поиска.
          </p>
          <Button 
            className="mt-4" 
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Все");
            }}
          >
            Сбросить фильтры
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
