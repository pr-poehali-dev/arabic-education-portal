import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { IslamicPattern } from './IslamicPattern';
import { Footer } from './Footer';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Изучение арабского языка',
      description: 'От алфавита до свободного чтения классических текстов',
    },
    {
      icon: 'GraduationCap',
      title: 'Исламские науки',
      description: 'Фикх, акыда, тафсир и хадисоведение от квалифицированных преподавателей',
    },
    {
      icon: 'Users',
      title: 'Живое общение',
      description: 'Интерактивные занятия в малых группах с персональным подходом',
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Выбирайте удобное время для занятий и учитесь в своем темпе',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <IslamicPattern />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
              <Icon name="Star" size={18} />
              <span className="text-sm font-cairo font-semibold">Онлайн-школа исламских наук</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-amiri mb-6 text-primary">
              Познавайте свет знаний
              <br />
              <span className="text-accent">вместе с нами</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-cairo max-w-2xl mx-auto">
              Изучайте арабский язык и исламские науки под руководством опытных преподавателей в комфортной онлайн-среде
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onNavigate('courses')}
                className="text-lg font-cairo"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Посмотреть курсы
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate('about')}
                className="text-lg font-cairo"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-amiri mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-cairo">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold font-amiri mb-6 text-primary">
              Наши курсы
            </h2>
            <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
              Выберите программу обучения, которая соответствует вашему уровню и целям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: 'Book',
                title: 'Арабский язык',
                description: 'От алфавита до чтения классических текстов',
                price: 'от 5000 ₽/мес',
                level: 'Начальный - Продвинутый'
              },
              {
                icon: 'Scale',
                title: 'Основы фикха',
                description: 'Изучение основ исламского права',
                price: 'от 5500 ₽/мес',
                level: 'Средний'
              },
              {
                icon: 'BookMarked',
                title: 'Тафсир Корана',
                description: 'Толкование избранных сур Корана',
                price: 'от 5500 ₽/мес',
                level: 'Средний'
              },
              {
                icon: 'Scroll',
                title: 'Хадисоведение',
                description: 'Изучение достоверных хадисов',
                price: 'от 6000 ₽/мес',
                level: 'Продвинутый'
              },
              {
                icon: 'Heart',
                title: 'Акыда',
                description: 'Основы исламского вероубеждения',
                price: 'от 5000 ₽/мес',
                level: 'Начальный'
              },
              {
                icon: 'Library',
                title: 'Все курсы',
                description: 'Посмотреть полный список программ',
                price: '',
                level: ''
              },
            ].map((course, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all animate-fade-in cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onNavigate('courses')}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={course.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-amiri mb-2 text-primary">
                  {course.title}
                </h3>
                <p className="text-muted-foreground font-cairo text-sm mb-3">
                  {course.description}
                </p>
                {course.price && (
                  <>
                    <div className="text-xs text-muted-foreground font-cairo mb-2">
                      {course.level}
                    </div>
                    <div className="text-lg font-bold text-accent font-cairo">
                      {course.price}
                    </div>
                  </>
                )}
                {!course.price && (
                  <div className="flex items-center text-primary font-cairo font-semibold mt-2">
                    Узнать больше
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('courses')}
              className="text-lg font-cairo"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Посмотреть все курсы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-amiri mb-6 text-primary">
              Начните свой путь к знаниям
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-cairo">
              Присоединяйтесь к сотням студентов, изучающих арабский язык и исламские науки
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 font-cairo">500+</div>
                <div className="text-muted-foreground font-cairo">Активных студентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 font-cairo">15+</div>
                <div className="text-muted-foreground font-cairo">Опытных преподавателей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 font-cairo">20+</div>
                <div className="text-muted-foreground font-cairo">Курсов и программ</div>
              </div>
            </div>
            <Button 
              size="lg"
              onClick={() => onNavigate('courses')}
              className="text-lg font-cairo"
            >
              Записаться на курс
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};