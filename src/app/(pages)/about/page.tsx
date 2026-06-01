
import Image from 'next/image'
import React from 'react'
export default function About() {
  return <>
      <main className="font-sans bg-olive-100 text-gray-800">
 
      {/* Hero Section */}
   <section className="relative h-75 flex items-center justify-center text-center overflow-hidden  ">

  {/* Text content */}
  <div className="relative z-10 px-4">
    <span className="inline-block  bg-[#dae4c5]  text-[#1a4a2e]  text-xs tracking-widest px-4 py-1 rounded-full mb-3">
      OUR IDENTITY
    </span>
    <h1 className="text-5xl font-semibold text-[#1a4a2e] mb-2 py-5">About NAZIF</h1>
    <p className="text-sm text-gray-800  max-w-md mx-auto leading-relaxed">
      Cultivating harmony between urban progress and environmental preservation through
      intelligent waste management solutions.
    </p>
  </div>

</section>
      {/* Our Story Section */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-6 p-6 md:p-10">
 
          {/* Left: Story Text */}
          <div className="flex-1">
            <p className="text-xs text-[#1a4a2e] font-bold uppercase tracking-widest mb-4">Our Story</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              NAZIF was founded on the principle that waste isn't an end-point, but a new beginning.
              We saw the growing disconnect between our consumption patterns and the natural world's
              capacity to absorb them. Our journey began in the quiet corners of research labs,
              seeking a way to bridge the gap between high-tech efficiency and organic sustainability.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Today, we stand as a beacon for intelligent waste management. By integrating advanced
              tracking systems with a deep respect for the circular economy, we transform how
              communities perceive and handle their environmental footprint. We don't just manage
              waste; we nurture ecosystems back to health.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-2xl font-bold text-gray-800">12k+</p>
                <p className="text-xs text-gray-400 mt-1">Tons Diverted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">45</p>
                <p className="text-xs text-gray-400 mt-1">Green Hubs</p>
              </div>
            </div>
          </div>
 
          {/* Right: Cards + Image */}
          <div className="flex flex-col gap-4 w-full md:w-64">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-xl p-4 flex items-start gap-3">
              <div className="bg-white rounded-full p-2 shadow-sm text-green-700 text-lg">🌿</div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Preservation</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">
                  Protecting biodiversity through cleaner urban cycles.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-100 rounded-xl p-4 flex items-start gap-3">
              <div className="bg-white rounded-full p-2 shadow-sm text-green-700 text-lg">♻</div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Circular Flow</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">
                  Ensuring materials return to the economy, not the earth.
                </p>
              </div>
            </div>
            {/* Illustration Card */}
            <div className="relative rounded-xl overflow-hidden bg-[#c8d8c0] h-36 flex items-end p-3">
                <Image
    src="/images/About-illustrated.png"
    alt="Hands holding recyclable items around a recycling symbol"
    fill
    className="object-cover opacity-60"
    priority
  />

              <p className="relative z-10 text-gray-600 text-xs font-medium">Innovation in harmony.</p>
            </div>
          </div>
 
        </div>
      </section>
 
      {/* Values Section */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">The NAZIF Core</p>
          <h2 className="text-xl font-semibold text-gray-800">Values that root our mission in reality.</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🌱",
              title: "Human Centric",
              desc: "Designed for real people, simplifying sustainability without sacrificing efficacy.",
            },
            {
              icon: "⚙️",
              title: "Intelligent Systems",
              desc: "Leveraging data to make every recycling action count toward a larger goal.",
            },
            {
              icon: "🌍",
              title: "Radical Care",
              desc: "Taking proactive responsibility for the environmental health of future generations.",
            },
          ].map((value) => (
            <div key={value.title} className="flex flex-col items-center gap-3">
              <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-sm">
                {value.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#2d5229] rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          <div className="flex-1 text-white">
            <p className="text-sm italic mb-3 opacity-80">Join the Movement.</p>
            <p className="text-sm text-green-200 mb-6 max-w-xs leading-relaxed">
              Be part of the solution. Start managing your footprint with NAZIF is intelligent marketplace today.
            </p>
            <button className="bg-white text-[#2d5229] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-green-50 transition-colors">
              Explore Marketplace
            </button>
          </div>
          {/* Right image placeholder */}
          <div className="relative w-full md:w-56 h-40 rounded-2xl overflow-hidden">
  <Image
    src="/images/about-products.png"
    alt="Eco friendly recyclable products"
    fill
    className="object-cover"
  />
</div>

        </div>
      </section>
 
     
 
    </main>
  
  
  </>
}
