import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const schedule = {
    monday: [
      { time: '09:00', course: 'Арабский язык для начинающих', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '11:00', course: 'Основы фикха', teacher: 'Устаз Юсуф', type: 'online' },
      { time: '15:00', course: 'Тафсир Корана', teacher: 'Устаз Ибрахим', type: 'online' },
      { time: '18:00', course: 'Продвинутый арабский', teacher: 'Устаз Ахмад', type: 'online' },
    ],
    tuesday: [
      { time: '09:00', course: 'Хадисоведение', teacher: 'Устаз Мухаммад', type: 'online' },
      { time: '11:00', course: 'Арабский язык для начинающих', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '15:00', course: 'Акыда', teacher: 'Устаз Юсуф', type: 'online' },
      { time: '18:00', course: 'Основы фикха', teacher: 'Устаз Юсуф', type: 'online' },
    ],
    wednesday: [
      { time: '09:00', course: 'Продвинутый арабский', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '11:00', course: 'Тафсир Корана', teacher: 'Устаз Ибрахим', type: 'online' },
      { time: '15:00', course: 'Арабский язык для начинающих', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '18:00', course: 'Хадисоведение', teacher: 'Устаз Мухаммад', type: 'online' },
    ],
    thursday: [
      { time: '09:00', course: 'Акыда', teacher: 'Устаз Юсуф', type: 'online' },
      { time: '11:00', course: 'Основы фикха', teacher: 'Устаз Юсуф', type: 'online' },
      { time: '15:00', course: 'Продвинутый арабский', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '18:00', course: 'Тафсир Корана', teacher: 'Устаз Ибрахим', type: 'online' },
    ],
    friday: [
      { time: '09:00', course: 'Арабский язык для начинающих', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '11:00', course: 'Хадисоведение', teacher: 'Устаз Мухаммад', type: 'online' },
      { time: '15:00', course: 'Акыда', teacher: 'Устаз Юсуф', type: 'online' },
    ],
    saturday: [
      { time: '10:00', course: 'Продвинутый арабский', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '13:00', course: 'Тафсир Корана', teacher: 'Устаз Ибрахим', type: 'online' },
      { time: '16:00', course: 'Основы фикха', teacher: 'Устаз Юсуф', type: 'online' },
    ],
    sunday: [
      { time: '10:00', course: 'Арабский язык для начинающих', teacher: 'Устаз Ахмад', type: 'online' },
      { time: '13:00', course: 'Хадисоведение', teacher: 'Устаз Мухаммад', type: 'online' },
      { time: '16:00', course: 'Акыда', teacher: 'Устаз Юсуф', type: 'online' },
    ],
  };

  const days = [
    { id: 'monday', label: 'Понедельник' },
    { id: 'tuesday', label: 'Вторник' },
    { id: 'wednesday', label: 'Среда' },
    { id: 'thursday', label: 'Четверг' },
    { id: 'friday', label: 'Пятница' },
    { id: 'saturday', label: 'Суббота' },
    { id: 'sunday', label: 'Воскресенье' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-amiri mb-6 text-primary">
            Расписание занятий
          </h1>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            Все занятия проходят онлайн в удобное для вас время
          </p>
        </div>

        <Card className="p-6 mb-8 bg-accent/10 border-accent/20 animate-fade-in">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-accent flex-shrink-0 mt-1" />
            <div className="font-cairo">
              <p className="font-semibold mb-1">Важная информация:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Время указано по московскому часовому поясу (МСК)</li>
                <li>• Продолжительность одного занятия — 90 минут</li>
                <li>• Ссылки на подключение отправляются за 30 минут до начала</li>
              </ul>
            </div>
          </div>
        </Card>

        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="animate-fade-in">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto mb-8">
            {days.map((day) => (
              <TabsTrigger 
                key={day.id} 
                value={day.id}
                className="font-cairo"
              >
                {day.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {days.map((day) => (
            <TabsContent key={day.id} value={day.id}>
              <div className="grid gap-4">
                {schedule[day.id as keyof typeof schedule].map((lesson, index) => (
                  <Card 
                    key={index} 
                    className="p-6 hover:shadow-lg transition-shadow animate-slide-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="text-3xl font-bold text-accent font-cairo">{lesson.time}</div>
                          <Badge variant="outline" className="mt-2">
                            <Icon name="Video" size={12} className="mr-1" />
                            Онлайн
                          </Badge>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-amiri mb-1 text-primary">
                            {lesson.course}
                          </h3>
                          <p className="text-muted-foreground font-cairo flex items-center gap-2">
                            <Icon name="User" size={16} />
                            {lesson.teacher}
                          </p>
                        </div>
                      </div>
                      <Button className="font-cairo whitespace-nowrap">
                        Записаться
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
