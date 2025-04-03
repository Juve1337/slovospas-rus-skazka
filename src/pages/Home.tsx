
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookText, Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProverbCard from "@/components/ProverbCard";

const featuredProverbs = [
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
  }
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-russian-blue">СловоСпас</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
          Сокровищница русской народной мудрости: пословицы и поговорки,
          отражающие многовековую историю и культурное наследие России
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-russian-red hover:bg-russian-red/90">
            <Link to="/dictionary">
              <BookText className="mr-2 h-5 w-5" />
              Словарь пословиц
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-russian-gold/50 hover:bg-russian-gold/10">
            <Link to="/illustrations">
              <Image className="mr-2 h-5 w-5" />
              Иллюстрации
            </Link>
          </Button>
        </div>
      </section>

      <section className="relative mx-auto max-w-xl px-4">
        <div className="flex">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Поиск пословиц и поговорок..."
              className="pl-10 border-russian-gold/30 pr-4 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="ml-2 bg-russian-blue hover:bg-russian-blue/90">
            Найти
          </Button>
        </div>
      </section>

      <section className="py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-playfair text-russian-blue">Популярные пословицы</h2>
          <Link
            to="/dictionary"
            className="text-sm font-medium text-russian-red hover:text-russian-red/80 transition-colors"
          >
            Смотреть все
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProverbs.map((proverb, index) => (
            <ProverbCard
              key={index}
              proverb={proverb.proverb}
              meaning={proverb.meaning}
              category={proverb.category}
            />
          ))}
        </div>
      </section>

      <section className="py-8 bg-russian-pattern bg-russian-blue/5 rounded-lg p-6 border border-russian-gold/30">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 font-playfair text-russian-blue">О проекте</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            СловоСпас — это проект, посвященный сохранению и распространению русских пословиц и поговорок,
            отражающих богатство русского языка, историю и культурное наследие России.
          </p>
          <Button asChild className="mt-6 bg-russian-blue hover:bg-russian-blue/90">
            <Link to="/about">Узнать больше</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
