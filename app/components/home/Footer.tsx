"use client";

import Container from "../ui/Container";
import { trackExternalClick } from "@/app/lib/analytics";

interface FooterLink {
  text: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Компания",
    links: [
      { text: "О нас", href: "/about" },
      { text: "Центр поддержки", href: "/support" },
    ],
  },
  {
    title: "Услуги",
    links: [
      { text: "US ESTA", href: "/services/esta" },
      { text: "UK ETA", href: "/services/uk-eta" },
      { text: "Canada eTA", href: "/services/canada-eta" },
    ],
  },
  {
    title: "Правовая информация",
    links: [
      { text: "Политика конфиденциальности", href: "/privacy" },
      { text: "Условия использования", href: "/terms" },
      { text: "Политика возврата", href: "/refund-policy" },
      { text: "Политика cookies", href: "/cookies" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { text: "Страны ESTA", href: "/united-states/countries" },
      { text: "Руководства ESTA", href: "/united-states/guide" },
      { text: "Страны UK ETA", href: "/united-kingdom/countries" },
      { text: "Руководства UK ETA", href: "/united-kingdom/guide" },
      { text: "Страны Canada eTA", href: "/canada/countries" },
      { text: "Руководства Canada eTA", href: "/canada/guide" },
      { text: "Блог и новости", href: "/blog" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleExternalClick = (url: string) => {
    trackExternalClick(url);
  };

  return (
    <footer className="bg-gray-dark text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">eVisa Portal</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Профессиональная помощь в оформлении разрешений на въезд
                по всему миру. Быстрый, безопасный и надёжный сервис для всех
                ваших документов.
              </p>
            </div>

            {/* Footer Columns */}
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={
                          link.external
                            ? () => handleExternalClick(link.href)
                            : undefined
                        }
                        className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.text}
                        {link.external && (
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations & Copyright Section */}
        <div className="border-t border-gray-600 py-8">
          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 space-y-2">
            <p>&copy; {currentYear} eVisa Portal. Все права защищены.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
