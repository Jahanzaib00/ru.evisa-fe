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
    title: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Support Center", href: "/support" },
      // { text: "Contact", href: "/support" },
    ],
  },
  {
    title: "Services",
    links: [
      { text: "US ESTA", href: "/services/esta" },
      { text: "UK ETA", href: "/services/uk-eta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Refund Policy", href: "/terms#refund-policy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "ESTA Countries", href: "/united-states/countries" },
      { text: "ESTA Guides", href: "/united-states/guide" },
      { text: "UK ETA Countries", href: "/united-kingdom/countries" },
      { text: "UK ETA Guides", href: "/united-kingdom/guide" },
      { text: "Blog & News", href: "/blog" },
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
                Expert assistance with travel authorization applications
                worldwide. Fast, secure, and reliable service for all your
                travel documents.
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
            <p>&copy; {currentYear} eVisa Portal. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
