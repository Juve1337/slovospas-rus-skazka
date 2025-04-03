
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BookText, Image } from "lucide-react";

const About = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-russian-blue">О проекте «СловоСпас»</h1>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
          Сохраняем и популяризируем народную мудрость России
        </p>
      </section>

      <section className="space-y-6">
        <div className="bg-russian-pattern bg-russian-blue/5 rounded-lg p-6 border border-russian-gold/30">
          <h2 className="text-2xl font-semibold mb-4 font-playfair text-russian-blue">Наша миссия</h2>
          <p className="text-muted-foreground">
            Проект «СловоСпас» создан с целью сохранения и популяризации богатейшего наследия 
            русской культуры — пословиц и поговорок, которые веками передавались из поколения в поколение.
            Мы стремимся не только собрать и систематизировать эти жемчужины народной мудрости, но и
            сделать их доступными для современного человека, показав их актуальность и значимость в 
            наши дни.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-russian-blue/5 rounded-lg p-6 border border-russian-gold/30">
            <div className="flex items-center mb-4">
              <BookText className="h-6 w-6 text-russian-red mr-2" />
              <h2 className="text-xl font-semibold font-playfair text-russian-blue">Словарь пословиц</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Наша электронная база данных содержит сотни русских пословиц и поговорок с подробными объяснениями их значений, 
              историческим контекстом и примерами использования.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <Link to="/dictionary">Посетить словарь</Link>
            </Button>
          </div>

          <div className="bg-russian-blue/5 rounded-lg p-6 border border-russian-gold/30">
            <div className="flex items-center mb-4">
              <Image className="h-6 w-6 text-russian-red mr-2" />
              <h2 className="text-xl font-semibold font-playfair text-russian-blue">Иллюстрации</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Мы сотрудничаем с художниками, которые создают визуальные интерпретации русских пословиц и поговорок,
              помогая глубже понять их смысл через искусство.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <Link to="/illustrations">Смотреть галерею</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-6 font-playfair text-russian-blue">История проекта</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Проект «СловоСпас» был основан в 2025 году группой энтузиастов, увлеченных русской культурой и языком.
            Начавшись как небольшая инициатива по сбору и систематизации народной мудрости, сегодня проект вырос
            в полноценный культурно-образовательный ресурс.
          </p>
          <p>
            Название «СловоСпас» отражает нашу миссию по сохранению («спасению») слова — живого наследия 
            русского языка в форме пословиц и поговорок. Мы верим, что в народной мудрости, проверенной веками, 
            содержатся универсальные истины и ценности, актуальные и в современном мире.
          </p>
          <p>
            Сегодня наша команда включает филологов, историков, художников и IT-специалистов, объединенных 
            общей целью — сделать культурное наследие России доступным для всех интересующихся.
          </p>
        </div>
      </section>

      <section className="text-center py-6">
        <h2 className="text-2xl font-semibold mb-4 font-playfair text-russian-blue">Присоединяйтесь к нам</h2>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-6">
          Мы приглашаем всех, кто интересуется русской культурой, языком и историей, 
          принять участие в развитии проекта «СловоСпас».
        </p>
        <Button className="bg-russian-red hover:bg-russian-red/90">
          <BookOpen className="mr-2 h-5 w-5" />
          Узнать как помочь проекту
        </Button>
      </section>
    </div>
  );
};

export default About;
