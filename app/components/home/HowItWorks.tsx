"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { JSX } from "react";
import { trackCTAClick } from "@/app/lib/analytics";
import { FileText, Eye, Mail } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Заполните заявку",
    description:
      "Заполните простую форму с данными паспорта и поездки. Занимает около 10 минут.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "Мы проверяем и подаём",
    description:
      "Наши специалисты проверяют заявку на ошибки, подают в соответствующие органы и отслеживают статус в реальном времени.",
    icon: <Eye className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Получите разрешение",
    description:
      "Получите одобренное разрешение на въезд по электронной почте. Большинство заявок одобряется в течение 24–72 часов.",
    icon: <Mail className="w-8 h-8" />,
  },
];

export default function HowItWorks() {
  const handleCTAClick = () => {
    trackCTAClick("how-it-works");
    // Scroll to popular services to let user choose
    document.getElementById('popular-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="how-it-works" background="gray" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Наш отлаженный процесс делает получение разрешения на въезд простым и быстрым
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-primary-light opacity-30" />
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Step Number Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-primary-light mt-6 mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-dark mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button variant="secondary" size="md" onClick={handleCTAClick}>
            Начать оформление
          </Button>
        </div>
      </Container>
    </Section>
  );
}
