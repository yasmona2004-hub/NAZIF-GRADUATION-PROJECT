import Link from "next/link";

/* ─────────────────────────────────────────────
   SVG ICONS  (inline — no extra dep needed)
───────────────────────────────────────────── */
const RecycleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
    <path d="M12 2l3.5 6H15a9 9 0 0 1 .93 4H18l-6 4-6-4h2.07A9 9 0 0 1 9 8h-.5L12 2z" />
    <path d="M5.07 12H3l6 4 6-4h-2.07" />
    <path d="M12 22v-6" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M13 2L4.09 12.26A1 1 0 0 0 5 14h6v8l8.91-10.26A1 1 0 0 0 19 10h-6V2z" />
  </svg>
);

/* ─────────────────────────────────────────────
   SECTION 1: HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-[#f9faf8] overflow-hidden pt-20 pb-10 px-6">
      {/* Top eyebrow */}
      <div className="flex justify-center mb-5">
        <span className="inline-flex items-center gap-2 bg-[#e1e3e1] text-[#2d4f1e] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4c6703] inline-block" />
          Smart Waste Solutions
        </span>
      </div>

      {/* Headline */}
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-[#191c1b] font-extrabold leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.4rem, 2vw, 4rem)" }}
        >
          Restoring Harmony Through {""}
          <span className="text-[#2d4f1e]"> Intelligent</span>
          <br />
          Waste Management
        </h1>
        <p
          className="text-[#43493e] max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1.05rem" }}
        >
          NAZIF brings cutting-edge technology to transform how cities, communities,
          and businesses approach a cleaner future for our planet.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#173809] text-white font-semibold px-7 py-3 rounded-full
              hover:bg-[#2d4f1e] active:scale-95 transition-all duration-200 shadow-md"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem" }}
          >
            Get Started
            <ChevronRight />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-2 border-[#173809] text-[#173809] font-semibold px-7 py-3 rounded-full
              hover:bg-[#f3f4f2] active:scale-95 transition-all duration-200"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem" }}
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Feature Pills row */}
      <div className="mt-16 flex flex-wrap justify-center gap-5 max-w-2xl mx-auto">
        {[
          { icon: <RecycleIcon />, label: "Smart Recycling" },
          { icon: <LeafIcon />, label: "Eco Tracking" },
          { icon: <TrashIcon />, label: "Live Waste Log" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 bg-white rounded-2xl px-8 py-6 shadow-sm border border-[#e7e8e6]
              hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-w-[130px]"
          >
            <span className="text-[#2d4f1e]">{icon}</span>
            <span
              className="text-[#191c1b] font-semibold text-sm text-center"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative blob */}
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a9d293 0%, transparent 70%)" }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2: FEATURE HIGHLIGHT (quote + image)
───────────────────────────────────────────── */
function FeatureSection() {
  return (
    <section className="bg-[#f9faf8] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Quote / statement */}
        <div className="text-center mb-12">
          <p
            className="text-[#43493e] italic max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem" }}
          >
            "Environmental consciousness begins with awareness of every action at every level."
          </p>
        </div>

        {/* Two-column: text left, image right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left: text card */}
          <div className="bg-white rounded-3xl p-8 border border-[#e7e8e6] shadow-sm">
            <div className="w-10 h-10 bg-[#f3f4f2] rounded-xl flex items-center justify-center mb-5">
              <LeafIcon />
            </div>
            <h2
              className="text-[#191c1b] font-bold mb-3 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.5rem" }}
            >
              Smart Waste Bins
            </h2>
            <p
              className="text-[#43493e] leading-relaxed mb-5"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem" }}
            >
              Our IoT-connected bins monitor fill levels in real-time, automatically
              optimizing collection routes and dramatically reducing operational costs.
              Smart sorting technology ensures maximum recycling efficiency.
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1.5 text-[#2d4f1e] font-semibold text-sm
                hover:gap-2.5 transition-all duration-200"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Explore Solutions <ChevronRight />
            </Link>
          </div>

          {/* Right: recycling photo card */}
          <div
            className="rounded-3xl overflow-hidden h-72 md:h-full min-h-[260px] relative"
            style={{
              backgroundImage: "url('/nev_recycle.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle dark overlay so label stays readable */}
            <div className="absolute inset-0 bg-[#173809]/30 rounded-3xl" />
            <div className="absolute bottom-5 left-5 right-5">
              <span
                className="text-white text-xs font-semibold tracking-widest uppercase drop-shadow"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Smart Sorting Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 3: THREE-COLUMN CARDS
───────────────────────────────────────────── */
const cards = [
  {
    bg: "bg-[#173809]",
    iconBg: "bg-[#2d4f1e]",
    textColor: "text-white",
    subColor: "text-[#98c083]",
    icon: <BoltIcon />,
    title: "Waste Pulse",
    desc: "Real-time analytics dashboard that tracks your waste output, recycling rate, and carbon footprint reduction across all locations.",
    tag: "Analytics",
  },
  {
    bg: "bg-white",
    iconBg: "bg-[#f3f4f2]",
    textColor: "text-[#191c1b]",
    subColor: "text-[#43493e]",
    icon: <RecycleIcon />,
    title: "Route Optimizer",
    desc: "AI-powered collection scheduling that cuts fuel costs and emissions by up to 40% through predictive fill-level analysis.",
    tag: "Logistics",
  },
  {
    bg: "bg-[#caec7f]",
    iconBg: "bg-white/60",
    textColor: "text-[#191c1b]",
    subColor: "text-[#384e00]",
    icon: <LeafIcon />,
    title: "Eco Credits",
    desc: "Turn your recycling efforts into tangible rewards. Earn, track and redeem green credits through our marketplace.",
    tag: "Rewards",
  },
];

function CardsSection() {
  return (
    <section className="bg-[#f3f4f2] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-[#4c6703]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            What We Offer
          </span>
          <h2
            className="text-[#191c1b] font-bold mt-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Tools Built for Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ bg, iconBg, textColor, subColor, icon, title, desc, tag }) => (
            <div
              key={title}
              className={`${bg} rounded-3xl p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`${iconBg} w-11 h-11 rounded-2xl flex items-center justify-center ${textColor}`}>
                {icon}
              </div>
              <div>
                <span
                  className={`text-xs font-semibold tracking-widest uppercase ${subColor} mb-1 block`}
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {tag}
                </span>
                <h3
                  className={`${textColor} font-bold mb-2`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.15rem" }}
                >
                  {title}
                </h3>
                <p
                  className={`${subColor} leading-relaxed`}
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem" }}
                >
                  {desc}
                </p>
              </div>
              <div className="mt-auto pt-2">
                <Link
                  href="/marketplace"
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${textColor} opacity-70 hover:opacity-100 transition-opacity`}
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Learn more <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 4: CTA BANNER
───────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="px-6 py-16 bg-[#f9faf8]">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl px-8 py-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #173809 0%, #2d4f1e 60%, #3a5e12 100%)" }}
        >
          {/* bg blobs */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #caec7f, transparent 70%)", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #a9d293, transparent 70%)", transform: "translate(-30%, 30%)" }}
          />

          <span
            className="inline-flex items-center gap-2 bg-white/10 text-[#caec7f] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#caec7f] inline-block" />
            Join the Movement
          </span>

          <h2
            className="text-white font-extrabold leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Ready to Clean the World?
          </h2>
          <p
            className="text-[#98c083] max-w-md mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem" }}
          >
            Join thousands of organizations already reducing their environmental
            footprint with NAZIF's intelligent waste management platform.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-[#caec7f] text-[#173809] font-bold px-8 py-3.5 rounded-full
                hover:bg-[#b1d269] active:scale-95 transition-all duration-200 shadow-lg"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem" }}
            >
              Get Started Free
              <ChevronRight />
            </Link>
            <Link
              href='/about'
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full
                hover:bg-white/10 active:scale-95 transition-all duration-200"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f9faf8]">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
      `}</style>

      <HeroSection />
      <FeatureSection />
      <CardsSection />
      <CTASection />
    </main>
  );
}




