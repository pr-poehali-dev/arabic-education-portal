import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Footer } from './Footer';

export const CoursesPage = () => {
  const courses = [
    {
      title: 'Арабский язык для начинающих',
      level: 'Начальный',
      duration: '6 месяцев',
      lessons: 48,
      description: 'Изучение арабского алфавита, основ чтения и письма, базовой грамматики',
      price: '5000 ₽/мес',
      features: ['Алфавит и правила чтения', 'Базовая лексика', 'Простые диалоги', 'Домашние задания'],
    },
    {
      title: 'Продвинутый арабский язык',
      level: 'Продвинутый',
      duration: '9 месяцев',
      lessons: 72,
      description: 'Углубленное изучение грамматики, чтение классических текстов, разговорная практика',
      price: '6000 ₽/мес',
      features: ['Сложная грамматика', 'Чтение текстов', 'Разговорная практика', 'Композиция текстов'],
    },
    {
      title: 'Основы фикха',
      level: 'Средний',
      duration: '8 месяцев',
      lessons: 64,
      description: 'Изучение основ исламского права: ибадат, муамалят, семейное право',
      price: '5500 ₽/мес',
      features: ['Очищение и молитва', 'Закят и пост', 'Хадж', 'Основы муамалят'],
    },
    {
      title: 'Тафсир Корана',
      level: 'Средний',
      duration: '12 месяцев',
      lessons: 96,
      description: 'Толкование избранных сур Корана с разбором лексики и грамматики',
      price: '5500 ₽/мес',
      features: ['Джуз Амма', 'Методология тафсира', 'Причины ниспослания', 'Уроки и мудрости'],
    },
    {
      title: 'Хадисоведение',
      level: 'Продвинутый',
      duration: '10 месяцев',
      lessons: 80,
      description: 'Изучение достоверных хадисов, основ науки хадисоведения, цепочек передатчиков',
      price: '6000 ₽/мес',
      features: ['Терминология хадисов', 'Сахих аль-Бухари', 'Наука иснада', 'Применение хадисов'],
    },
    {
      title: 'Акыда',
      level: 'Начальный',
      duration: '6 месяцев',
      lessons: 48,
      description: 'Основы исламского вероубеждения согласно пониманию саляф ас-салих',
      price: '5000 ₽/мес',
      features: ['Имена и атрибуты Аллаха', 'Столпы веры', 'Вопросы таухида', 'Защита от нововведений'],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Средний':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Продвинутый':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-amiri mb-6 text-primary">
            Наши курсы
          </h1>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            Выберите программу обучения, которая соответствует вашему уровню и целям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="p-6 flex flex-col hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge className={getLevelColor(course.level)}>
                  {course.level}
                </Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent font-cairo">{course.price}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold font-amiri mb-3 text-primary">
                {course.title}
              </h3>
              
              <p className="text-muted-foreground font-cairo text-sm mb-4 flex-grow">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-cairo">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="BookOpen" size={16} />
                  <span>{course.lessons} уроков</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-cairo">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full font-cairo">
                Записаться на курс
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};