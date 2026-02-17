"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { authService } from "../lib/api/services/auth.service";
import Alert from "../components/ui/Alert";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Spinner } from "../components/ui/Loader";
import { COMPANY_NAME } from "../lib/constants/company";

type Step = "email" | "otp" | "password" | "success";

const OTP_RESEND_COOLDOWN = 60; // seconds

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("email");

  // Shared state
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  // Resend cooldown
  const [resendCooldown, setResendCooldown] = useState(0);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // OTP input refs for focus management
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Clear cooldown on unmount
  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    };
  }, []);

  const startCooldown = () => {
    setResendCooldown(OTP_RESEND_COOLDOWN);
    cooldownRef.current = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // ─── Step 1: Send OTP ────────────────────────────────────────────────────────

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setIsLoading(true);

    try {
      const res = await authService.forgotPassword(email);
      setInfo(res.message);
      setStep("otp");
      startCooldown();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setError("");
    setInfo("");
    setIsLoading(true);

    try {
      const res = await authService.forgotPassword(email);
      setInfo("A new code has been sent to your email.");
      setOtp(Array(6).fill(""));
      otpRefs.current[0]?.focus();
      startCooldown();
    } catch (err: any) {
      setError(err.message || "Failed to resend code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ─── OTP input handling ───────────────────────────────────────────────────────

  const handleOtpChange = (index: number, value: string) => {
    // Only accept single digit
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);

    // Auto-advance focus
    if (digit && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = [...otp];
    pasted.split("").forEach((char, i) => {
      if (i < 6) next[i] = char;
    });
    setOtp(next);
    const lastFilled = Math.min(pasted.length, 5);
    otpRefs.current[lastFilled]?.focus();
  };

  // ─── Step 2: Verify OTP ──────────────────────────────────────────────────────

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter the 6-digit code.");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      await authService.verifyOtp(email, code);
      setStep("password");
    } catch (err: any) {
      setError(err.message || "Invalid or expired code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ─── Step 3: Reset Password ──────────────────────────────────────────────────

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      await authService.resetPassword(email, otp.join(""), newPassword);
      setStep("success");
    } catch (err: any) {
      setError(err.message || "Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ─── Step indicator ───────────────────────────────────────────────────────────

  const stepLabels: Record<Exclude<Step, "success">, string> = {
    email: "Enter your email",
    otp: "Verify your identity",
    password: "Set new password",
  };

  const stepNumber: Record<Exclude<Step, "success">, number> = {
    email: 1,
    otp: 2,
    password: 3,
  };

  return (
    <div className="min-h-screen bg-gray-lightest flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt={`${COMPANY_NAME} Logo`}
              width={200}
              height={40}
              className="mx-auto mb-4"
            />
          </Link>
        </div>

        <div className="bg-white py-8 px-4 shadow-2xl rounded-2xl sm:px-10">
          {step === "success" ? (
            // ── Success ──────────────────────────────────────────────────────
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-dark">
                Password reset!
              </h2>
              <p className="text-gray text-sm">
                Your password has been updated successfully. You can now sign in
                with your new password.
              </p>
              <Link href="/login" className="block">
                <Button variant="primary" size="md" fullWidth>
                  Back to Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  {(["email", "otp", "password"] as const).map((s, i) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors
                          ${
                            step === s
                              ? "bg-primary text-white"
                              : stepNumber[step] > i + 1
                              ? "bg-success text-white"
                              : "bg-gray-200 text-gray"
                          }`}
                      >
                        {stepNumber[step] > i + 1 ? (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          i + 1
                        )}
                      </div>
                      {i < 2 && (
                        <div
                          className={`flex-1 h-0.5 mx-2 transition-colors ${
                            stepNumber[step] > i + 1
                              ? "bg-success"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-dark">
                  {stepLabels[step]}
                </h2>
              </div>

              {error && <Alert variant="error" message={error} className="mb-4" />}
              {info && <Alert variant="info" message={info} className="mb-4" />}

              {/* ── Step 1: Email ──────────────────────────────────────── */}
              {step === "email" && (
                <form onSubmit={handleSendOtp} className="space-y-5">
                  <p className="text-sm text-gray">
                    Enter the email address associated with your account and
                    we'll send you a verification code.
                  </p>
                  <Input
                    id="email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={isLoading}
                    icon={
                      isLoading ? (
                        <Spinner size="sm" variant="white" />
                      ) : undefined
                    }
                  >
                    {isLoading ? "Sending..." : "Send Verification Code"}
                  </Button>
                </form>
              )}

              {/* ── Step 2: OTP ────────────────────────────────────────── */}
              {step === "otp" && (
                <form onSubmit={handleVerifyOtp} className="space-y-5">
                  <p className="text-sm text-gray">
                    We sent a 6-digit code to{" "}
                    <span className="font-semibold text-gray-dark">{email}</span>
                    . Enter it below.
                  </p>

                  {/* OTP inputs */}
                  <div className="flex gap-2 w-fit mx-auto">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => { otpRefs.current[i] = el; }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        onPaste={i === 0 ? handleOtpPaste : undefined}
                        className="w-11 h-14 shrink-0 text-center text-2xl font-bold border-2 rounded-lg border-gray-light focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:outline-none text-gray-dark transition-colors caret-primary"
                        aria-label={`Digit ${i + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={isLoading || otp.join("").length < 6}
                    icon={
                      isLoading ? (
                        <Spinner size="sm" variant="white" />
                      ) : undefined
                    }
                  >
                    {isLoading ? "Verifying..." : "Verify Code"}
                  </Button>

                  {/* Resend */}
                  <div className="text-center text-sm">
                    <span className="text-gray">Didn't receive a code? </span>
                    {resendCooldown > 0 ? (
                      <span className="text-gray">
                        Resend in{" "}
                        <span className="font-semibold text-primary">
                          {resendCooldown}s
                        </span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isLoading}
                        className="font-medium text-primary-light hover:text-primary transition-colors disabled:opacity-50"
                      >
                        Resend code
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStep("email");
                      setError("");
                      setInfo("");
                    }}
                    className="w-full text-center text-sm text-gray hover:text-gray-dark transition-colors"
                  >
                    ← Change email address
                  </button>
                </form>
              )}

              {/* ── Step 3: New Password ───────────────────────────────── */}
              {step === "password" && (
                <form onSubmit={handleResetPassword} className="space-y-5">
                  <p className="text-sm text-gray">
                    Choose a strong password for your account.
                  </p>
                  <Input
                    id="new-password"
                    label="New password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    helperText="Minimum 8 characters"
                  />
                  <Input
                    id="confirm-password"
                    label="Confirm new password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat your password"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={isLoading}
                    icon={
                      isLoading ? (
                        <Spinner size="sm" variant="white" />
                      ) : undefined
                    }
                  >
                    {isLoading ? "Resetting..." : "Reset Password"}
                  </Button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Back to login */}
        {step !== "success" && (
          <div className="mt-8 text-center">
            <Link
              href="/login"
              className="text-sm font-medium text-gray hover:text-gray-dark transition duration-150 ease-in-out"
            >
              ← Back to sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
