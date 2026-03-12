import Container from "../ui/Container";
import Section from "../ui/Section";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Анна К.",
    location: "Москва",
    rating: 5,
    text: "Быстро и удобно. Разрешение одобрили за 12 часов. Служба поддержки помогла с требованиями к фото. Однозначно рекомендую!",
  },
  {
    name: "Дмитрий С.",
    location: "Санкт-Петербург",
    rating: 5,
    text: "Очень профессиональный сервис. Пошаговые инструкции сделали процесс оформления максимально понятным. Стоит каждого рубля ради спокойствия.",
  },
  {
    name: "Елена В.",
    location: "Екатеринбург",
    rating: 5,
    text: "Переживала, что допущу ошибки в анкете, но их система проверки всё обнаружила. Одобрили за 4 часа. Спасибо!",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-warning" : "text-gray-light"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <Section id="testimonials" background="gray" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray">
            Тысячи довольных путешественников уже доверили нам оформление своих документов
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-gray italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-light">
                <div className="font-semibold text-gray-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Score */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-lg px-8 py-4 shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-warning"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-xl text-gray-dark">
                4,95 из 5
              </div>
              <div className="text-sm text-gray">На основе 66 000+ отзывов</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
