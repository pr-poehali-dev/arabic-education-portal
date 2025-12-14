import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  onLoginClick: () => void;
}

export const Header = ({ onNavigate, currentSection, onLoginClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О школе' },
    { id: 'courses', label: 'Курсы' },
    { id: 'schedule', label: 'Расписание' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xl">
              ن
            </div>
            <span className="font-amiri text-2xl font-bold text-primary">Исламское наследие</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className="font-cairo"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              onClick={onLoginClick}
              className="hidden md:flex font-cairo"
            >
              <Icon name="User" size={18} className="mr-2" />
              Личный кабинет
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={currentSection === item.id ? 'default' : 'ghost'}
                      onClick={() => handleNavigate(item.id)}
                      className="justify-start text-lg font-cairo"
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button 
                    onClick={() => {
                      onLoginClick();
                      setIsOpen(false);
                    }}
                    className="justify-start text-lg font-cairo mt-4"
                  >
                    <Icon name="User" size={18} className="mr-2" />
                    Личный кабинет
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};