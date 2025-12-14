import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Footer } from './Footer';

export const AboutPage = () => {
  const teachers = [
    {
      name: 'Устаз Ахмад',
      subject: 'Арабский язык',
      experience: '12 лет преподавания',
    },
    {
      name: 'Устаз Юсуф',
      subject: 'Фикх и усуль аль-фикх',
      experience: '15 лет преподавания',
    },
    {
      name: 'Устаз Ибрахим',
      subject: 'Тафсир и улюм аль-Кур\'ан',
      experience: '10 лет преподавания',
    },
    {
      name: 'Устаз Мухаммад',
      subject: 'Хадисоведение',
      experience: '8 лет преподавания',
    },
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Искренность',
      description: 'Мы стремимся передавать знания с чистым намерением ради Всевышнего',
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Высокий уровень преподавания и проверенные методики обучения',
    },
    {
      icon: 'Users',
      title: 'Община',
      description: 'Создаем дружную общину студентов и преподавателей',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-amiri mb-6 text-primary">
              О нашей школе
            </h1>
            <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
              Онлайн-школа "Нур" была основана с целью сделать изучение арабского языка 
              и исламских наук доступным для всех желающих познать свою религию
            </p>
          </div>

          <Card className="p-8 mb-12 bg-muted/30 border-none animate-fade-in">
            <h2 className="text-2xl font-bold font-amiri mb-4 text-primary">Наша миссия</h2>
            <p className="text-muted-foreground font-cairo leading-relaxed mb-4">
              Мы верим, что знание — это свет, который освещает путь каждого мусульманина. 
              Наша миссия — предоставить качественное исламское образование, основанное на 
              достоверных источниках и понимании салафов уммы.
            </p>
            <p className="text-muted-foreground font-cairo leading-relaxed">
              Мы стремимся создать комфортную образовательную среду, где каждый студент 
              может развиваться в своем темпе, получая поддержку опытных преподавателей 
              и общаясь с единомышленниками.
            </p>
          </Card>

          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold font-amiri mb-8 text-center text-primary">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-amiri mb-2">{value.title}</h3>
                  <p className="text-muted-foreground font-cairo text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold font-amiri mb-8 text-center text-primary">
              Наши преподаватели
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-amiri mb-1">{teacher.name}</h3>
                      <p className="text-accent font-cairo font-semibold mb-1">{teacher.subject}</p>
                      <p className="text-sm text-muted-foreground font-cairo">{teacher.experience}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};