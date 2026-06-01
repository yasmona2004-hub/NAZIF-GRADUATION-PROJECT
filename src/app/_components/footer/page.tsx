
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Home", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Wastelog", href: "/wastelog" },
    { label: "Get Started", href: "/get-started" },
  ],
  Company: [
    { label: "About", href: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e7e8e6]">

      {/* Main body */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="text-[#173809] font-extrabold text-lg tracking-tight w-fit"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              NAZIF
            </Link>
            <p
              className="text-[#43493e] leading-relaxed max-w-xs"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem" }}
            >
              Restoring harmony through intelligent waste management.
              Building a greener future — one collection at a time.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter" },
                { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-[#f3f4f2] flex items-center justify-center text-[#43493e]
                    hover:bg-[#173809] hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              <h4
                className="text-[#173809] text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {group}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[#43493e] text-xs hover:text-[#173809] transition-colors duration-150"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e7e8e6]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[#73796d] text-xs"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © {new Date().getFullYear()} NAZIF. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[#4c6703] text-xs" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Made with
            </span>
            <span className="text-[#173809] text-xs mx-0.5">♻️</span>
            <span className="text-[#4c6703] text-xs" style={{ fontFamily: "'Manrope', sans-serif" }}>
              for a greener planet
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}