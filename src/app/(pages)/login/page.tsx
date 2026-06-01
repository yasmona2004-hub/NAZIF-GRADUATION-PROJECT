// "use client";

// import { useState } from "react";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex min-h-screen">

//       {/* Left Panel — green */}
//       <div className="hidden md:flex md:w-[48%] lg:w-[45%] bg-[#2d4a28] flex-col justify-between p-10 lg:p-14 flex-shrink-0">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a8c49a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
//             <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
//           </svg>
//           <span className="text-[#a8c49a] font-bold tracking-widest text-sm uppercase">NAZIF</span>
//         </div>

//         {/* Quote */}
//         <div className="flex flex-col items-center text-center px-4">
//           <span className="text-[#4a6644] text-8xl font-serif leading-none mb-6">"</span>
//           <p className="text-[#c8d8c2] text-lg lg:text-xl italic font-light leading-relaxed max-w-xs">
//             "The greatest threat to our planet is the belief that someone else will save it."
//           </p>
//           <div className="w-8 h-px bg-[#4a6644] my-5" />
//           <p className="text-[#6a8a64] text-xs tracking-[0.25em] uppercase font-medium">Robert Swan</p>
//         </div>

//         <div />
//       </div>

//       {/* Right Panel — off-white */}
//       <div className="flex-1 bg-[#f5f4f0] flex items-center justify-center px-6 py-12 sm:px-10">
//         <div className="w-full max-w-md">

//           {/* Mobile logo */}
//           <div className="flex items-center gap-2 mb-8 md:hidden">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
//               <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
//             </svg>
//             <span className="text-[#2d4a28] font-bold tracking-widest text-sm uppercase">NAZIF</span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-3">
//             Welcome Back
//           </h1>
//           <p className="text-[#888] text-sm sm:text-base leading-relaxed mb-10">
//             Access your dashboard to track your environmental impact and manage pickups.
//           </p>

//           {/* Form */}
//           <div className="space-y-5">

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Email Address</label>
//               <div className="flex items-center gap-3 bg-white border border-[#ddd] rounded-2xl px-4 py-3.5 focus-within:border-[#2d4a28] transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
//                   <rect width="20" height="16" x="2" y="4" rx="2"/>
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//                 </svg>
//                 <input
//                   type="email"
//                   placeholder="name@example.com"
//                   className="flex-1 text-sm bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#bbb]"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <label className="text-sm font-medium text-[#1a1a1a]">Password</label>
//                 <span className="text-sm text-[#1a1a1a] font-medium cursor-pointer hover:underline">
//                   Forgot password?
//                 </span>
//               </div>
//               <div className="flex items-center gap-3 bg-white border border-[#ddd] rounded-2xl px-4 py-3.5 focus-within:border-[#2d4a28] transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
//                   <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                 </svg>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   className="flex-1 text-sm bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#bbb]"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-[#aaa] hover:text-[#555] transition flex-shrink-0"
//                 >
//                   {showPassword ? (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
//                       <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
//                       <line x1="1" y1="1" x2="23" y2="23"/>
//                     </svg>
//                   ) : (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                       <circle cx="12" cy="12" r="3"/>
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Button */}
//             <button className="w-full bg-[#2d4a28] text-white py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#1e3318] active:scale-[0.98] transition-all mt-2">
//               Log In
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </button>

//           </div>

//           {/* Divider */}
//           <div className="border-t border-[#ddd] my-8" />

//           {/* Footer links */}
//           <div className="space-y-2 text-center">
//             <p className="text-sm text-[#888]">
//               New to NAZIF?{" "}
//               <span className="text-[#1a1a1a] font-semibold cursor-pointer hover:underline">
//                 Create Account
//               </span>
//             </p>
//             <p className="text-sm text-[#888]">
//               Need to update your security?{" "}
//               <span className="text-[#1a1a1a] font-semibold cursor-pointer hover:underline">
//                 Change Password
//               </span>
//             </p>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }
// "use client";

// import { useState } from "react";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <section className="flex justify-center items-center min-h-screen bg-white px-4 py-8">
//       <div className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ minHeight: "520px" }}>

//         {/* Left: Green Panel */}
//         <div className="hidden md:flex bg-[#2d4a28] flex-col justify-between p-10">

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8c49a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
//               <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
//             </svg>
//             <span className="text-[#a8c49a] font-bold tracking-widest text-xs uppercase">NAZIF</span>
//           </div>

//           {/* Quote */}
//           <div className="flex flex-col items-center text-center px-2">
//             <span className="text-[#4a6644] text-7xl font-serif leading-none mb-4">"</span>
//             <p className="text-[#c8d8c2] text-sm italic font-light leading-relaxed">
//               "The greatest threat to our planet is the belief that someone else will save it."
//             </p>
//             <div className="w-6 h-px bg-[#4a6644] my-4" />
//             <p className="text-[#6a8a64] text-[10px] tracking-[0.25em] uppercase font-medium">Robert Swan</p>
//           </div>

//           <div />
//         </div>

//         {/* Mobile top green banner */}
//         <div className="md:hidden bg-[#2d4a28] flex flex-col items-center justify-center py-8 px-6 text-center">
//           <div className="flex items-center gap-2 mb-4">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8c49a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
//               <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
//             </svg>
//             <span className="text-[#a8c49a] font-bold tracking-widest text-xs uppercase">NAZIF</span>
//           </div>
//           <p className="text-[#c8d8c2] text-xs italic leading-relaxed max-w-xs">
//             "The greatest threat to our planet is the belief that someone else will save it."
//           </p>
//         </div>

//         {/* Right: Form */}
//         <div className="flex flex-col justify-center px-6 py-8 sm:px-10 bg-[#f5f4f0]">
//           <div className="w-full max-w-sm mx-auto">

//             <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-1">Welcome Back</h1>
//             <p className="text-[#888] text-xs sm:text-sm leading-relaxed mb-6">
//               Access your dashboard to track your environmental impact and manage pickups.
//             </p>

//             <div className="space-y-4">

//               {/* Email */}
//               <div>
//                 <label className="block text-xs font-semibold text-[#1a1a1a] mb-1.5">Email Address</label>
//                 <div className="flex items-center gap-3 bg-white border border-[#ddd] rounded-2xl px-4 py-2.5 focus-within:border-[#2d4a28] transition">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
//                     <rect width="20" height="16" x="2" y="4" rx="2"/>
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//                   </svg>
//                   <input
//                     type="email"
//                     placeholder="name@example.com"
//                     className="flex-1 text-sm bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#bbb]"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="text-xs font-semibold text-[#1a1a1a]">Password</label>
//                   <span className="text-xs text-[#2d4a28] font-medium cursor-pointer hover:underline">Forgot password?</span>
//                 </div>
//                 <div className="flex items-center gap-3 bg-white border border-[#ddd] rounded-2xl px-4 py-2.5 focus-within:border-[#2d4a28] transition">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
//                     <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                   </svg>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="••••••••"
//                     className="flex-1 text-sm bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#bbb]"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="text-[#aaa] hover:text-[#555] transition flex-shrink-0"
//                   >
//                     {showPassword ? (
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
//                         <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
//                         <line x1="1" y1="1" x2="23" y2="23"/>
//                       </svg>
//                     ) : (
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                         <circle cx="12" cy="12" r="3"/>
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Button */}
//               <button className="w-full bg-[#2d4a28] text-white py-2.5 sm:py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#1e3318] active:scale-[0.98] transition-all">
//                 Log In
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M5 12h14M12 5l7 7-7 7"/>
//                 </svg>
//               </button>

//             </div>

//             {/* Divider */}
//             <div className="border-t border-[#ddd] my-5" />

//             Footer links
//             <div className="space-y-1.5 text-center">
//               <p className="text-xs text-[#888]">
//                 New to NAZIF?{" "}
//                 <span className="text-[#1a1a1a] font-bold cursor-pointer hover:underline">Create Account</span>
//               </p>
//               <p className="text-xs text-[#888]">
//                 Need to update your security?{" "}
//                 <span className="text-[#1a1a1a] font-bold cursor-pointer hover:underline">Change Password</span>
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Invalid credentials. Please try again.");
        return;
      }

      // On success — redirect or store token as needed
      // e.g. localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-white px-4 py-8">
      <div
        className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ minHeight: "520px" }}
      >
        {/* Left: Green Panel */}
        <div className="hidden md:flex bg-[#2d4a28] flex-col justify-between p-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a8c49a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="text-[#a8c49a] font-bold tracking-widest text-xs uppercase">
              NAZIF
            </span>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center text-center px-2">
            <span className="text-[#4a6644] text-7xl font-serif leading-none mb-4">
              "
            </span>
            <p className="text-[#c8d8c2] text-sm italic font-light leading-relaxed">
              "The greatest threat to our planet is the belief that someone else
              will save it."
            </p>
            <div className="w-6 h-px bg-[#4a6644] my-4" />
            <p className="text-[#6a8a64] text-[10px] tracking-[0.25em] uppercase font-medium">
              Robert Swan
            </p>
          </div>

          <div />
        </div>

        {/* Mobile top green banner */}
        <div className="md:hidden bg-[#2d4a28] flex flex-col items-center justify-center py-8 px-6 text-center">
          <div className="flex items-center gap-2 mb-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a8c49a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="text-[#a8c49a] font-bold tracking-widest text-xs uppercase">
              NAZIF
            </span>
          </div>
          <p className="text-[#c8d8c2] text-xs italic leading-relaxed max-w-xs">
            "The greatest threat to our planet is the belief that someone else
            will save it."
          </p>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 bg-[#f5f4f0]">
          <div className="w-full max-w-sm mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-1">
              Welcome Back
            </h1>
            <p className="text-[#888] text-xs sm:text-sm leading-relaxed mb-6">
              Access your dashboard to track your environmental impact and
              manage pickups.
            </p>

            <div className="space-y-4">
              {/* Error message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl px-4 py-2.5">
                  {error}
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#1a1a1a] mb-1.5">
                  Email Address
                </label>
                <div className="flex items-center gap-3 bg-white border border-[#ddd] rounded-2xl px-4 py-2.5 focus-within:border-[#2d4a28] transition">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="flex-1 text-sm bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#bbb]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-[#1a1a1a]">
                    Password
                  </label>
                  <span className="text-xs text-[#2d4a28] font-medium cursor-pointer hover:underline">
                    Forgot password?
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-[#ddd] rounded-2xl px-4 py-2.5 focus-within:border-[#2d4a28] transition">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="flex-1 text-sm bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#bbb]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#aaa] hover:text-[#555] transition flex-shrink-0"
                  >
                    {showPassword ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-[#2d4a28] text-white py-2.5 sm:py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#1e3318] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Logging in…
                  </>
                ) : (
                  <>
                    Log In
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-[#ddd] my-5" />

            {/* Footer links */}
            <div className="space-y-1.5 text-center">
              <p className="text-xs text-[#888]">
                New to NAZIF?{" "}
                <span
                  onClick={() => router.push("/register")}
                  className="text-[#1a1a1a] font-bold cursor-pointer hover:underline"
                >
                  Create Account
                </span>
              </p>
              <p className="text-xs text-[#888]">
                Need to update your security?{" "}
                <span
                  onClick={() => router.push("/changepassword")}
                  className="text-[#1a1a1a] font-bold cursor-pointer hover:underline"
                >
                  Change Password
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}