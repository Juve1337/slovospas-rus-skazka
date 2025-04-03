
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Sample illustrations data
const illustrations = [
  {
    id: 1,
    title: "Тише едешь — дальше будешь",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    artist: "Иван Иванов",
    description: "Иллюстрация показывает неспешного путника, который доходит до цели, в то время как торопливые теряются по пути."
  },
  {
    id: 2,
    title: "Без труда не выловишь и рыбку из пруда",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    artist: "Мария Петрова",
    description: "На иллюстрации изображён рыбак, усердно трудящийся ради своего улова."
  },
  {
    id: 3,
    title: "Не имей сто рублей, а имей сто друзей",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    artist: "Сергей Сидоров",
    description: "Иллюстрация показывает группу друзей, помогающих друг другу в трудную минуту."
  },
  {
    id: 4,
    title: "Москва не сразу строилась",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    artist: "Анна Козлова",
    description: "На иллюстрации изображено строительство Москвы через века — от деревянного кремля до современного мегаполиса."
  },
  {
    id: 5,
    title: "Семь раз отмерь — один раз отрежь",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    artist: "Дмитрий Николаев",
    description: "Иллюстрация показывает портного, тщательно измеряющего ткань перед тем, как сделать разрез."
  },
  {
    id: 6,
    title: "В гостях хорошо, а дома лучше",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    artist: "Ольга Соколова",
    description: "На иллюстрации изображён уютный домашний очаг, к которому возвращается путешественник."
  },
];

const Illustrations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIllustrations = illustrations.filter(
    (illustration) =>
      illustration.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      illustration.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-playfair text-russian-blue">Иллюстрации к пословицам</h1>
        <p className="text-muted-foreground">
          Визуальное представление русской народной мудрости в работах художников
        </p>
      </section>

      <section className="relative mx-auto max-w-xl mb-8">
        <div className="flex">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Поиск по названию или автору..."
              className="pl-10 border-russian-gold/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="ml-2 bg-russian-blue hover:bg-russian-blue/90">
            Найти
          </Button>
        </div>
      </section>

      {filteredIllustrations.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIllustrations.map((illustration) => (
            <Dialog key={illustration.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border-russian-gold/30">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={illustration.image}
                      alt={illustration.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-playfair font-semibold text-russian-blue mb-1">{illustration.title}</h3>
                    <p className="text-sm text-muted-foreground">{illustration.artist}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-playfair">{illustration.title}</DialogTitle>
                  <DialogDescription className="text-right text-russian-red">
                    Художник: {illustration.artist}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={illustration.image}
                    alt={illustration.title}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-muted-foreground">{illustration.description}</p>
                </div>
              </DialogContent>
            </Dialog>
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
            onClick={() => setSearchQuery("")}
          >
            Сбросить поиск
          </Button>
        </div>
      )}
    </div>
  );
};

export default Illustrations;
