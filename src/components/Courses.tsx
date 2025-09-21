import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Star } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Майсторство в портретната фотография",
      description: "Научете се да заснемате зашеметяващи портрети с професионални техники за осветление и насочване на позата.",
      image: "https://images.unsplash.com/photo-1669789758542-8b7746dd0612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTY4OTg2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "8 седмици",
      students: "2,543",
      rating: "4.9",
      level: "От начинаещи до напреднали",
      price: "599 лв"
    },
    {
      title: "Пейзажна фотография",
      description: "Овладейте изкуството да заснемате спиращи дъха пейзажи и природна красота при всякакви условия на осветление.",
      image: "https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG5hdHVyZXxlbnwxfHx8fDE3NTY5ODYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "6 седмици",
      students: "1,892",
      rating: "4.8",
      level: "Средно ниво",
      price: "499 лв"
    },
    {
      title: "Комерсиална фотография",
      description: "Научете продуктова фотография, брандови снимки и комерсиални техники за професионални клиенти.",
      image: "https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1Njk5MjY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "10 седмици",
      students: "987",
      rating: "4.9",
      level: "Напреднали",
      price: "799 лв"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Нашите курсове по фотография</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изберете от нашите внимателно изработени курсове, създадени да ви превърнат от начинаещ в професионален фотограф.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500">{course.level}</Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-orange-500">{course.price}</span>
                  <Button>Запишете се сега</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8">
            Вижте всички курсове
          </Button>
        </div>
      </div>
    </section>
  );
}