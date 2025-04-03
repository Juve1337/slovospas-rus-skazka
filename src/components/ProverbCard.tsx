
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, Share2Icon } from "lucide-react";

interface ProverbCardProps {
  proverb: string;
  meaning: string;
  category?: string;
}

const ProverbCard = ({ proverb, meaning, category }: ProverbCardProps) => {
  return (
    <Card className="overflow-hidden border-russian-gold/30 hover:shadow-md transition-shadow">
      <CardHeader className="bg-russian-blue/5 border-b border-russian-gold/30 py-4">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair font-semibold text-russian-blue">{proverb}</h3>
          {category && (
            <span className="text-xs px-2 py-1 bg-russian-red/10 text-russian-red rounded-full">
              {category}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-muted-foreground">{meaning}</p>
        <div className="flex justify-end gap-2 mt-4">
          <Button size="sm" variant="ghost" className="text-muted-foreground">
            <BookmarkIcon className="h-4 w-4 mr-1" />
            <span className="text-xs">Сохранить</span>
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground">
            <Share2Icon className="h-4 w-4 mr-1" />
            <span className="text-xs">Поделиться</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProverbCard;
