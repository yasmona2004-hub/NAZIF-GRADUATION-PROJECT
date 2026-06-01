
// import Image from 'next/image';

// export default function Register() {
//   return (
//     <section className="flex justify-center items-center min-h-screen bg-white px-4">
//       <div className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden" style={{minHeight: '520px'}}>
        
//         {/* Left: Image */}
//         <div className="relative w-full h-[200px] md:h-auto">
//           <Image
//             src="/images/register-image.png"
//             alt="Sustainability illustration"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/10" />
//         </div>

//         {/* Right: Form */}
//         <div className="flex flex-col justify-center px-8 py-8 bg-white">
//           <div className="w-full">
//             <h1 className="text-3xl font-bold text-[#1a331f] mb-1">Join NAZIF</h1>
//             <p className="text-gray-500 text-sm mb-6">
//               Connect with neighbors and experts to improve your local recycling habits.
//             </p>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 mb-1">Username</label>
//                 <input
//                   type="text"
//                   placeholder="waste_warrior"
//                   className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   placeholder="••••••••••••"
//                   className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="••••••••••••"
//                   className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               <button className="w-full bg-[#244226] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a331f] transition-all shadow-md">
//                 Get Started
//               </button>
//             </div>

//             <p className="text-center mt-5 text-sm text-gray-600">
//               Already active?{' '}
//               <span className="text-black font-bold cursor-pointer hover:underline">Log in</span>
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://nazif.tryasp.net/api/Auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Registration failed. Please try again.");
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-white px-4">
      <div
        className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ minHeight: "520px" }}
      >
        {/* Left: Image */}
        <div className="relative w-full h-[200px] md:h-auto">
          <Image
            src="/images/register-image.png"
            alt="Sustainability illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Right: Form */}
        <div className="flex flex-col justify-center px-8 py-8 bg-white">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-[#1a331f] mb-1">
              Join NAZIF
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              Connect with neighbors and experts to improve your local recycling
              habits.
            </p>

            <div className="space-y-4">
              {/* Error message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl px-4 py-2.5">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="waste_warrior"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                onClick={handleRegister}
                disabled={loading}
                className="w-full bg-[#244226] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a331f] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    Creating account…
                  </>
                ) : (
                  "Get Started"
                )}
              </button>
            </div>

            <p className="text-center mt-5 text-sm text-gray-600">
              Already active?{" "}
              <span
                onClick={() => router.push("/login")}
                className="text-black font-bold cursor-pointer hover:underline"
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}