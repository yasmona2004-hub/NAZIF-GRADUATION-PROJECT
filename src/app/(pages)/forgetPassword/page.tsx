// import React from 'react'

// export default function ForgetPassword() {
//   return (
//     <div>ForgetPassword</div>
//   )
// }
// pages/forgot-password.jsx  (or app/forgot-password/page.jsx for App Router)
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4EF]">

      {/* ── Main ── */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-10">

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-[#F0EFEA] flex items-center justify-center mb-8">
            {/* Lock-with-refresh SVG */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D4A2D"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z" />
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M9.5 14.5a2.5 2.5 0 0 1 5 0" />
              <path d="M14.5 14.5v2.5" />
              {/* small refresh arc inside lock */}
              <path d="M11 17.5h2" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-xl font-semibold text-[#1C1C18] mb-2">
            Forgot Password
          </h1>
          <p className="text-sm text-[#6B6B60] leading-relaxed mb-8">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          {/* Email field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1C1C18] mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-[#F5F4EF] border border-transparent rounded-xl px-4 py-3 focus-within:border-[#3B5E3B] transition-colors">
              {/* Mail icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9B9B90"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              <input
                id="email"
                type="email"
                placeholder="yourname@domain.com"
                className="flex-1 bg-transparent text-sm text-[#1C1C18] placeholder-[#ADADAC] outline-none"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#2D4A2D] hover:bg-[#1E3A1E] active:scale-[0.98] text-white text-sm font-medium rounded-xl py-3.5 transition-all duration-150"
          >
            Send Reset Link
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Footer links */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/sign-in"
              className="flex items-center gap-1.5 text-sm text-[#3B3B35] hover:text-[#1E3A1E] transition-colors"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Login
            </Link>
            <p className="text-sm text-[#9B9B90]">
              Need help?{" "}
              <Link
                href="/contact"
                className="font-medium text-[#1C1C18] hover:underline"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </main>

    
    </div>
  );
}