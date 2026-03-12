"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";
import Alert from "../components/ui/Alert";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Spinner } from "../components/ui/Loader";
import Image from "next/image";

export default function SignupPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setError("Пароль должен содержать не менее 8 символов");
      return;
    }

    setIsLoading(true);

    try {
      await register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
    } catch (err: any) {
      setError(err.message || "Регистрация не удалась. Попробуйте ещё раз.");
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
              alt="EVISA Logo"
              width={200}
              height={40}
              className="mx-auto mb-4"
            />
          </Link>
        </div>

        {/* Signup Form */}
        <div className="bg-white py-8 px-4 shadow-2xl rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <Alert variant="error" message={error} />}

            <div className="grid grid-cols-2 gap-4">
              <Input
                id="firstName"
                label="Имя"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Иван"
              />
              <Input
                id="lastName"
                label="Фамилия"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Иванов"
              />
            </div>

            <Input
              id="email"
              label="Электронная почта"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <Input
              id="password"
              label="Пароль"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Минимум 8 символов"
            />

            <Input
              id="confirmPassword"
              label="Подтвердите пароль"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Введите пароль ещё раз"
            />

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
              {isLoading ? "Создание аккаунта..." : "Создать аккаунт"}
            </Button>

            <div className="text-xs text-gray text-center">
              Регистрируясь, вы соглашаетесь с{" "}
              <Link
                href="/terms"
                className="text-primary-light hover:text-primary"
              >
                Условиями использования
              </Link>{" "}
              и{" "}
              <Link
                href="/privacy"
                className="text-primary-light hover:text-primary"
              >
                Политикой конфиденциальности
              </Link>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Уже есть аккаунт?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/login" className="block">
                <Button variant="outline" size="md" fullWidth>
                  Войти
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
