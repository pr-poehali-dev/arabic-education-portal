import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface StudentDashboardProps {
  onLogout: () => void;
}

export const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const studentData = {
    name: 'Ахмад Иванов',
    totalCourses: 3,
    completedLessons: 42,
    totalLessons: 120,
    studyHours: 63,
  };

  const activeCourses = [
    {
      title: 'Арабский язык для начинающих',
      progress: 65,
      nextLesson: 'Урок 32: Прошедшее время глаголов',
      nextLessonDate: '2024-12-15 09:00',
      completedLessons: 31,
      totalLessons: 48,
    },
    {
      title: 'Основы фикха',
      progress: 40,
      nextLesson: 'Урок 26: Условия действительности молитвы',
      nextLessonDate: '2024-12-14 11:00',
      completedLessons: 25,
      totalLessons: 64,
    },
    {
      title: 'Акыда',
      progress: 20,
      nextLesson: 'Урок 10: Имена и атрибуты Аллаха',
      nextLessonDate: '2024-12-16 15:00',
      completedLessons: 9,
      totalLessons: 48,
    },
  ];

  const recentLessons = [
    {
      course: 'Арабский язык для начинающих',
      lesson: 'Урок 31: Настоящее время глаголов',
      date: '2024-12-13',
      duration: '90 мин',
      status: 'completed',
    },
    {
      course: 'Основы фикха',
      lesson: 'Урок 25: Столпы молитвы',
      date: '2024-12-12',
      duration: '90 мин',
      status: 'completed',
    },
    {
      course: 'Акыда',
      lesson: 'Урок 9: Таухид ар-Рубубийя',
      date: '2024-12-11',
      duration: '90 мин',
      status: 'completed',
    },
  ];

  const achievements = [
    { icon: 'Award', title: 'Первый шаг', description: 'Завершили первый урок' },
    { icon: 'Star', title: '10 уроков', description: 'Прошли 10 уроков подряд' },
    { icon: 'Flame', title: 'Недельная серия', description: '7 дней непрерывного обучения' },
    { icon: 'Trophy', title: 'Отличник', description: 'Средний балл выше 90%' },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-amiri mb-2 text-primary">
              Ас-саляму алейкум, {studentData.name}!
            </h1>
            <p className="text-muted-foreground font-cairo">
              Продолжайте свой путь к знаниям
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={onLogout}
            className="mt-4 md:mt-0 font-cairo"
          >
            <Icon name="LogOut" size={18} className="mr-2" />
            Выйти
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-cairo mb-1">Активных курсов</p>
                <p className="text-3xl font-bold font-cairo text-primary">{studentData.totalCourses}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-cairo mb-1">Пройдено уроков</p>
                <p className="text-3xl font-bold font-cairo text-accent">
                  {studentData.completedLessons}/{studentData.totalLessons}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-cairo mb-1">Часов обучения</p>
                <p className="text-3xl font-bold font-cairo text-primary">{studentData.studyHours}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-cairo mb-1">Общий прогресс</p>
                <p className="text-3xl font-bold font-cairo text-accent">
                  {Math.round((studentData.completedLessons / studentData.totalLessons) * 100)}%
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="animate-fade-in">
          <TabsList className="mb-8">
            <TabsTrigger value="courses" className="font-cairo">Мои курсы</TabsTrigger>
            <TabsTrigger value="history" className="font-cairo">История</TabsTrigger>
            <TabsTrigger value="achievements" className="font-cairo">Достижения</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid gap-6">
              {activeCourses.map((course, index) => (
                <Card key={index} className="p-6 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-amiri mb-2 text-primary">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-cairo mb-3">
                        <span>{course.completedLessons} из {course.totalLessons} уроков</span>
                        <span>•</span>
                        <span>{course.progress}% завершено</span>
                      </div>
                      <Progress value={course.progress} className="h-2 mb-4" />
                      <div className="flex items-start gap-2 text-sm">
                        <Icon name="Calendar" size={16} className="text-accent mt-0.5" />
                        <div className="font-cairo">
                          <p className="font-semibold">Следующий урок:</p>
                          <p className="text-muted-foreground">{course.nextLesson}</p>
                          <p className="text-accent text-xs mt-1">{course.nextLessonDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="font-cairo whitespace-nowrap">
                        <Icon name="Play" size={18} className="mr-2" />
                        Продолжить обучение
                      </Button>
                      <Button variant="outline" className="font-cairo whitespace-nowrap">
                        <Icon name="FileText" size={18} className="mr-2" />
                        Материалы курса
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="grid gap-4">
              {recentLessons.map((lesson, index) => (
                <Card key={index} className="p-6 animate-slide-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold font-amiri mb-1">{lesson.lesson}</h4>
                        <p className="text-sm text-muted-foreground font-cairo">{lesson.course}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground font-cairo">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={12} />
                            {lesson.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={12} />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="font-cairo">
                      <Icon name="RotateCcw" size={16} className="mr-1" />
                      Повторить
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement.icon} size={28} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-amiri mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground font-cairo">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
