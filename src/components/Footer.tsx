
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-russian-gold/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-playfair text-lg font-semibold text-russian-blue">СловоСпас</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Сокровищница русской народной мудрости
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-sm hover:text-russian-red transition-colors">
              Главная
            </Link>
            <Link to="/dictionary" className="text-sm hover:text-russian-red transition-colors">
              Словарь
            </Link>
            <Link to="/illustrations" className="text-sm hover:text-russian-red transition-colors">
              Иллюстрации
            </Link>
            <Link to="/about" className="text-sm hover:text-russian-red transition-colors">
              О проекте
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-russian-gold/30 pt-4 text-center text-sm text-muted-foreground">
          © 2025 СловоСпас — Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;
