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
    title: "About",
    links: [
      { text: "About Us", href: "#" },
      { text: "Contact", href: "#" },
      { text: "FAQ", href: "#faq" },
      { text: "Support Center", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Refund Policy", href: "#" },
      { text: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "ESTA Requirements", href: "#requirements" },
      { text: "Eligible Countries", href: "#" },
      {
        text: "Official U.S. ESTA Site",
        href: "https://esta.cbp.dhs.gov/",
        external: true,
      },
      {
        text: "U.S. Customs & Border",
        href: "https://www.cbp.gov/",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleExternalClick = (url: string) => {
    trackExternalClick(url);
  };

  return (
    <footer className="bg-gov-gray-dark text-white">
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

              {/* Social Links (Optional) */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
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
