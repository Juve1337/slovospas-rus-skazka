
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookText, Image, Info, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const links = [
    { to: "/", icon: <Home className="h-5 w-5" />, label: "Главная" },
    { to: "/dictionary", icon: <BookText className="h-5 w-5" />, label: "Словарь" },
    { to: "/illustrations", icon: <Image className="h-5 w-5" />, label: "Иллюстрации" },
    { to: "/about", icon: <Info className="h-5 w-5" />, label: "О проекте" },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 w-64 bg-background border-r border-russian-gold/30 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between h-16 border-b border-russian-gold/30 px-4">
        <span className="text-lg font-playfair font-semibold">Меню</span>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="px-4 py-6 space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-foreground hover:bg-russian-red/10 hover:text-russian-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="border-t border-russian-gold/30 pt-4 text-center text-sm text-muted-foreground">
          © 2025 СловоСпас
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
