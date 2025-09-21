import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Мария Иванова",
      role: "Сватбен фотограф",
      avatar: "МИ",
      rating: 5,
      text: "Курсът по портретна фотография напълно промени подхода ми към сватбената фотография. Техниките за осветление, които научих, издигнаха работата ми на професионално ниво."
    },
    {
      name: "Петър Георгиев",
      role: "Фотограф пътешественик",
      avatar: "ПГ",
      rating: 5,
      text: "Като човек, който пътува по света, курсът по пейзажна фотография ми даде уменията да заснемам зашеметяваща природна красота. Последователите ми в Instagram се увеличиха с 300%!"
    },
    {
      name: "Ани Димитрова",
      role: "Комерсиален фотограф",
      avatar: "АД",
      rating: 5,
      text: "Курсът по комерсиална фотография ми помогна да спечеля първия си голям клиент. Бизнес аспектите, разгледани в курса, бяха безценни за започването на моя фотографски бизнес."
    },
    {
      name: "Димитър Стоянов",
      role: "От любител към професионалист",
      avatar: "ДС",
      rating: 5,
      text: "Започнах като пълен начинаещ и сега редовно имам платени снимки. Стъпка по стъпка подходът направи сложните концепции лесни за разбиране и прилагане."
    },
    {
      name: "Елена Петрова",
      role: "Собственик на студио",
      avatar: "ЕП",
      rating: 5,
      text: "Тези курсове не само ме научиха на фотография - научиха ме как да управлявам фотографски бизнес. Сега притежавам успешно портретно студио в центъра."
    },
    {
      name: "Георги Николов",
      role: "Фотограф на природа",
      avatar: "ГН",
      rating: 5,
      text: "Техническите знания и художествената визия, която получих от тези курсове, ми помогнаха да публикувам работата си в National Geographic. Абсолютно преобразяващо!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Какво казват нашите студенти</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присъединете се към хилядите фотографи, които са трансформирали уменията и кариерите си с нашите курсове.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-orange-500 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 от над 5,000 студенти</span>
          </div>
        </div>
      </div>
    </section>
  );
}