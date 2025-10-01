import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'daily', label: 'تأجير يومي' },
    { id: 'project', label: 'تأجير بالتسكين' },
    { id: 'documents', label: 'المستندات الرسمية' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">EL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-primary-foreground">شركة الليثي</h1>
              <p className="text-xs text-primary-foreground/80">لتوريد المعدات الثقيلة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+201234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary-foreground/20 mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-md text-right transition-colors ${
                    currentPage === item.id
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-primary-foreground/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <a href="tel:+201234567890" className="flex items-center gap-2 px-4 py-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>اتصل بنا الآن</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
