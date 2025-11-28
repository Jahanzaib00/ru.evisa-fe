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
      { text: "Contact", href: "/support" },
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
      { text: "ESTA Guides", href: "/guides" },
      { text: "Eligible Countries", href: "/countries" },
      { text: "Blog & News", href: "/blog" },
      { text: "FAQ", href: "/support#faq" },
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
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">ESTA Service</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Expert assistance with U.S. Electronic System for Travel
                Authorization applications. Fast, secure, and reliable.
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

        {/* Disclaimer Section */}
        <div className="border-t border-gray-600 py-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Important Disclaimer
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">
                This is a private service website.
              </strong>{" "}
              We are not affiliated with, endorsed by, or connected to the U.S.
              government or the Department of Homeland Security. The official
              ESTA website is{" "}
              <a
                href="https://esta.cbp.dhs.gov/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalClick("https://esta.cbp.dhs.gov/")}
                className="text-blue-400 hover:text-blue-300 underline font-semibold"
              >
                esta.cbp.dhs.gov
              </a>
              . We provide application assistance services for an additional fee
              beyond the government's official ESTA charge ($40.00). Our service
              includes form review, error checking, status monitoring, and 24/7
              multilingual support.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} ESTA Service. All rights reserved.</p>
            <p className="mt-2">Made with care for travelers worldwide</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
