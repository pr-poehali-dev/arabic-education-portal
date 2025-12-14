import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export const ContactsPage = () => {
  const contacts = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@nur-school.ru',
      link: 'mailto:info@nur-school.ru',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@nur_school',
      link: 'https://t.me/nur_school',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-amiri mb-6 text-primary">
            Свяжитесь с нами
          </h1>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь в выборе программы обучения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold font-amiri mb-2">{contact.title}</h3>
              <a 
                href={contact.link}
                className="text-accent hover:underline font-cairo"
              >
                {contact.value}
              </a>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 animate-fade-in">
            <h2 className="text-2xl font-bold font-amiri mb-6 text-center text-primary">
              Напишите нам
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 font-cairo">
                  Ваше имя
                </label>
                <Input 
                  placeholder="Введите ваше имя" 
                  className="font-cairo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 font-cairo">
                  Email или телефон
                </label>
                <Input 
                  placeholder="Введите email или номер телефона" 
                  className="font-cairo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 font-cairo">
                  Тема обращения
                </label>
                <Input 
                  placeholder="О чем вы хотите спросить?" 
                  className="font-cairo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 font-cairo">
                  Сообщение
                </label>
                <Textarea 
                  placeholder="Расскажите подробнее о вашем вопросе..." 
                  rows={6}
                  className="font-cairo"
                />
              </div>

              <Button className="w-full font-cairo" size="lg">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <Card className="p-6 mt-8 bg-muted/30 border-none animate-fade-in">
            <h3 className="font-bold font-amiri mb-3 text-lg">Часы работы</h3>
            <div className="space-y-2 font-cairo text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Понедельник - Пятница:</span>
                <span className="font-semibold text-foreground">9:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Суббота - Воскресенье:</span>
                <span className="font-semibold text-foreground">10:00 - 18:00</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
