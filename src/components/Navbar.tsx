
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Flag } from "lucide-react";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navbar = ({ sidebarOpen, setSidebarOpen }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-10 border-b border-russian-gold/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link to="/" className="flex items-center gap-2 text-russian-blue">
            <BookOpen className="h-6 w-6 text-russian-red" />
            <span className="text-xl font-playfair font-bold">СловоСпас</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-russian-red transition-colors">
            Главная
          </Link>
          <Link to="/dictionary" className="font-medium hover:text-russian-red transition-colors">
            Словарь
          </Link>
          <Link to="/illustrations" className="font-medium hover:text-russian-red transition-colors">
            Иллюстрации
          </Link>
          <Link to="/about" className="font-medium hover:text-russian-red transition-colors">
            О проекте
          </Link>
        </nav>

        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="text-russian-red">
            <Flag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
