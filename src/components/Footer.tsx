import Icon from '@/components/ui/icon';
import { IslamicPattern } from './IslamicPattern';

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground mt-24">
      <div className="absolute inset-0 opacity-5">
        <IslamicPattern />
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-transparent rounded-0">
                <span className="text-3xl">☪️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-amiri text-accent">Исламское наследие</h3>
                <p className="text-sm font-cairo opacity-80">Онлайн-школа</p>
              </div>
            </div>
            <p className="text-sm font-cairo opacity-80 leading-relaxed">
              Качественное исламское образование онлайн. 
              Изучайте арабский язык, фикх и основы религии 
              с квалифицированными преподавателями.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-bold font-amiri mb-6 text-accent">Навигация</h4>
            <ul className="space-y-3 font-cairo">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-2">
                  <Icon name="ChevronLeft" size={14} />
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-2">
                  <Icon name="ChevronLeft" size={14} />
                  О школе
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-2">
                  <Icon name="ChevronLeft" size={14} />
                  Курсы
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-2">
                  <Icon name="ChevronLeft" size={14} />
                  Расписание
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-2">
                  <Icon name="ChevronLeft" size={14} />
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-bold font-amiri mb-6 text-accent">Контакты</h4>
            <ul className="space-y-4 font-cairo">
              <li>
                <a href="tel:+79001234567" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={14} className="text-accent" />
                  </div>
                  +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@nur-school.ru" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={14} className="text-accent" />
                  </div>
                  info@nur-school.ru
                </a>
              </li>
              <li>
                <div className="text-sm opacity-80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={14} className="text-accent" />
                  </div>
                  <span>г. Казань, ул. Баумана, 58</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Социальные сети и график работы */}
          <div>
            <h4 className="text-lg font-bold font-amiri mb-6 text-accent">Мы в соцсетях</h4>
            <div className="flex gap-3 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all group">
                <Icon name="Send" size={18} className="text-accent group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all group">
                <Icon name="Youtube" size={18} className="text-accent group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all group">
                <Icon name="Instagram" size={18} className="text-accent group-hover:text-primary" />
              </a>
            </div>
            
            <div className="font-cairo">
              <h5 className="text-sm font-semibold mb-3 text-accent">Режим работы</h5>
              <p className="text-sm opacity-80 leading-relaxed">
                Пн-Пт: 9:00 - 21:00<br />
                Сб-Вс: 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-cairo opacity-60 text-center md:text-left">© 2025 «Исламское наследие». Все права защищены.</p>
            <div className="flex gap-6 font-cairo text-sm">
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">
                Политика конфиденциальности
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};