"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      name: "US ESTA",
      href: "/services/esta",
      description: "Travel authorization for the United States",
    },
    {
      name: "UK ETA",
      href: "/services/uk-eta",
      description: "Electronic Travel Authorization for UK",
    },
    {
      name: "Canada eTA",
      href: "/services/canada-eta",
      description: "Electronic Travel Authorization for Canada",
    },
    {
      name: "Thailand TDAC",
      href: "/services/thailand-tdac",
      description: "Digital Arrival Card for Thailand",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="ESTA Application Online"
                width={140}
                height={40}
                className="h-10 md:h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={toggleServices}
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-light transition-colors duration-200"
              >
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeIn z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-primary-light">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-0.5">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-light font-medium transition-colors duration-200 focus:outline-none"
                >
                  <div className="w-9 h-9 bg-linear-to-r from-primary-light to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </div>
                  <span className="hidden lg:block">{user.firstName}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-fadeIn">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-light transition-colors duration-150"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      My Applications
                    </Link>
                    {/* <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-light transition-colors duration-150"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Account Settings
                    </Link> */}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-primary-light font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg animate-slideDown">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {user && (
              <div className="px-3 py-3 mb-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <p className="text-sm font-semibold text-gray-900">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-600 mt-0.5">{user.email}</p>
              </div>
            )}

            {/* Services Section */}
            <div className="py-2">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {service.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="border-t border-gray-200 pt-2">
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-light hover:bg-blue-50 transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/support"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-light hover:bg-blue-50 transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
            </div>

            {/* User Section */}
            {user ? (
              <div className="border-t border-gray-200 pt-2">
                <Link
                  href="/orders"
                  className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-light hover:bg-blue-50 transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Applications
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-3 py-2 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-150"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-2">
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-light hover:bg-blue-50 transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/"
                className="block px-3 py-2.5 bg-primary-light text-white text-center text-base font-bold rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
