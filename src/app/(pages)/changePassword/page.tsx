// import React from 'react'

// export default function ChangePassword() {
//   return (
//     <div>ChangePassword</div>
//   )
// }
// pages/change-password.jsx  (or app/change-password/page.jsx for App Router)
"use client";

import { useState } from "react";
import Link from "next/link";

/* ── tiny helper: password strength ── */
function getStrength(pw) {
  if (!pw) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const map = [
    { label: "Weak",   color: "bg-red-400"    },
    { label: "Fair",   color: "bg-orange-400"  },
    { label: "Good",   color: "bg-yellow-500"  },
    { label: "Strong", color: "bg-green-500"   },
    { label: "Strong", color: "bg-green-500"   },
  ];
  return { score, ...map[score] };
}

/* ── reusable password input ── */
function PasswordInput({ id, label, icon, value, onChange, placeholder = "••••••••" }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-[#1C1C18] mb-2">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3 bg-[#F5F4EF] border border-transparent rounded-xl px-4 py-3 focus-within:border-[#3B5E3B] transition-colors">
        {/* leading icon */}
        <span className="text-[#9B9B90] shrink-0">{icon}</span>

        <input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-[#1C1C18] placeholder-[#ADADAC] outline-none"
        />

        {/* show/hide toggle */}
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="text-[#9B9B90] hover:text-[#3B3B35] transition-colors shrink-0"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7 1-2.26 2.65-4.16 4.73-5.41M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.46-4.47M3 3l18 18" />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── icons ── */
const KeyIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="M21 2 11.5 11.5" />
    <path d="M15.5 6.5 17 5l2 2-1.5 1.5" />
  </svg>
);

const LockDotIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

/* ── main page ── */
export default function ChangePasswordPage() {
  const [current, setCurrent] = useState("");
  const [newPw, setNewPw]     = useState("");
  const [confirm, setConfirm] = useState("");

  const strength = getStrength(newPw);
  const bars = [0, 1, 2, 3]; // 4 segments

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4EF]">


      {/* ── Back link ── */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-6">
        <Link
          href="/settings"
          className="inline-flex items-center gap-1.5 text-sm text-[#3B3B35] hover:text-[#1E3A1E] transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Return to Settings
        </Link>
      </div>

      {/* ── Main card ── */}
      <main className="flex-1 flex items-start justify-center px-4 py-10">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm p-10">

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-[#E8F0E8] flex items-center justify-center mb-7">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2D4A2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2 11.5 11.5" />
              <circle cx="7.5" cy="15.5" r="5.5" />
              <path d="M15.5 6.5 17 5l2 2-1.5 1.5" />
              {/* small circular arrow to suggest "reset" */}
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-[#1C1C18] mb-1.5">Change Password</h1>
          <p className="text-sm text-[#6B6B60] mb-8">
            To protect your account, please choose a strong password.
          </p>

          <div className="flex flex-col gap-5">
            {/* Current password */}
            <PasswordInput
              id="current"
              label="Current Password"
              icon={<KeyIcon />}
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
            />

            {/* New + Confirm side-by-side */}
            <div className="grid grid-cols-2 gap-4 bg-amber-200">
              <PasswordInput
                id="new"
                label="New Password"
                icon={<LockDotIcon />}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
              />

              <PasswordInput
                id="confirm"
                label="Confirm New Password"
                icon={<ShieldIcon />}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
{/* 
            Strength meter
            <div className="bg-[#F5F4EF] rounded-xl px-4 py-3">
              <div className="flex gap-1.5 mb-2">
                {bars.map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      i < strength.score ? strength.color : "bg-[#DDDDD5]"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-[#6B6B60]">
                Password strength:{" "}
                <span className="font-semibold text-[#1C1C18]">
                  {strength.label || "—"}
                </span>
              </p>
            </div> */}

            {/* Submit */}
            <button
              type="button"
              className="w-full bg-[#2D4A2D] hover:bg-[#1E3A1E] active:scale-[0.98] text-white text-sm font-medium rounded-xl py-3.5 transition-all duration-150"
            >
              Update Password
            </button>

            {/* Cancel */}
            <button
              type="button"
              className="w-full text-sm text-[#3B3B35] hover:text-[#1E3A1E] transition-colors text-center py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>

      {/* ── Tip strip ── */}
      <div className="max-w-7xl mx-auto w-full px-6 pb-10">
        <div className="flex items-start gap-3 text-xs text-[#6B6B60]">
          {/* light-bulb */}
          <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9B9B90" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.9 10 18.5 8.1 18 6.4A6 6 0 0 0 6 8c0 2.1.9 3.7 2.5 4.8A4 4 0 0 1 10 16" />
            <path d="M10 21h4" />
            <path d="M9.8 17h4.5" />
          </svg>
          <p>
            <strong>Tip:</strong> Use a combination of letters, numbers, and symbols for maximum
            security. Avoid using personal information like birthdays.
          </p>
        </div>
      </div>

   
    </div>
  );
}