"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";
import Image from "next/image";
import Alert from "../components/ui/Alert";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Spinner } from "../components/ui/Loader";
import { COMPANY_NAME } from "../lib/constants/company";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || "Не удалось войти. Проверьте ваши данные.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-lightest flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="ESTA Logo"
              width={200}
              height={40}
              className="mx-auto mb-4"
            />
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white py-8 px-4 shadow-2xl rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <Alert variant="error" message={error} />}

            <Input
              id="email"
              label="Электронная почта"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите email"
            />

            <Input
              id="password"
              label="Пароль"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />

            <div className="flex justify-end text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-primary-light hover:text-primary transition duration-150 ease-in-out"
              >
                Забыли пароль?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              variant="primary"
              size="md"
              fullWidth
              icon={
                isLoading ? <Spinner size="sm" variant="white" /> : undefined
              }
            >
              {isLoading ? "Вход..." : "Войти"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Впервые на {COMPANY_NAME}?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/signup" className="block">
                <Button variant="outline" size="md" fullWidth>
                  Создать аккаунт
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-gray hover:text-gray-dark transition duration-150 ease-in-out"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
