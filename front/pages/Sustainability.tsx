import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <div className="flex flex-col font-['Inter',_sans-serif] bg-[#fdfcf9] text-[#131811]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5SqIlY6Vd1HGMI6FTAKzEAfzePaIvsd0-CZPBfggi7nD1pEi32rAziDr2I_Xrkcs3SrasiXh1T0HyZgkenmArSer0NwGoN-hxE7vFHKp6jf98rrYI8GTT-ikdWTUw4TlQyoSdEHg0bX2HuiL_zA_0xNvYy9dQJypJSjzF1SCrtFlp_W5QFaiDsMzM6tlCSUAiy8bkt7qM8Zo_srVClK3VZBeWf5PxY1twYvsBcgIcbhuR2z1K2gI6VjhZkpYCSLpDNkK-KOQYCUk")` 
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#52d411] font-bold uppercase tracking-widest text-sm mb-4">Our Commitment</span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">Sustainability Pillars & Impact</h1>
        </div>
      </section>

      {/* Pillar 1: Better for Planet */}
      <section className="py-20 px-4 md:px-20 lg:px-40 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img 
                alt="Sustainable forests" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlXj67rdsXiP3UJbX2NL8BCMCORUKrM1YgctYbFBI8DpqVatGKGwfjTNxfpou5LAj5mmZvnsCASxitxjhSMsBjgHbYse56LLRACZqumxSvCv98G-fZUqF8ZPEL50Rw-43YA87W73JCDYVqLKv1fqVe_KhC9BZ2Gkgb4xSShJMyeResFOQo13XCEvGvOTW-jhf20rvlQ83dSaPMakxSfj_Ly__MJ61rT0Op5t-RmJBAJV_7ZxRu3jxDYqHZomWLwdnaP7fJkzXtapk"
              />
              <div className="absolute top-6 left-6 bg-green-600 text-white p-3 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">Better for Planet</div>
            <h2 className="text-4xl font-bold text-green-700">Working for Nature</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              We are committed to protecting our planet through sustainable practices. Our products use eco-friendly materials and we work to minimize our environmental impact. From sustainable sourcing to carbon-neutral distribution, every step of our process considers the health of our planet for future generations.
            </p>
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
              <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">forest</span> Environmental Impact
              </h4>
              <p className="text-sm text-gray-700">
                100% sustainable pulp sourcing, reduced carbon emissions, and eco-friendly packaging solutions across all our product lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Better for People */}
      <section className="py-20 px-4 md:px-20 lg:px-40 bg-[#fdfcf9] overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img 
                alt="Nepali students with school supplies" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute top-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">Better for People</div>
            <h2 className="text-4xl font-bold text-blue-600">Supporting Education & Communities</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              We believe in empowering the next generation through education and community support. Our initiatives include providing school supplies, supporting local educational programs, and creating opportunities for Nepali students to thrive. We invest in the future by investing in people.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">groups</span> Community Programs
              </h4>
              <p className="text-sm text-gray-700">
                Educational scholarships, health awareness programs, and skill development workshops across all 7 provinces of Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Better for Business */}
      <section className="py-20 px-4 md:px-20 lg:px-40 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img 
                alt="Business growth and partnerships" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute top-6 left-6 bg-orange-600 text-white p-3 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">Better for Business</div>
            <h2 className="text-4xl font-bold text-orange-600">Growing Together</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our business model is built on mutual growth and sustainable partnerships. We support local distributors, create employment opportunities, and contribute to Nepal's economic development. Through ethical business practices and transparent operations, we ensure that our success benefits everyone in our network.
            </p>
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
              <h4 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">handshake</span> Our Mission
              </h4>
              <p className="text-sm text-gray-700">
                To be Nepal's most trusted hygiene products distributor while creating positive impact for people, planet, and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 px-4 bg-[#f0f4f8]/30">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-gray-500">Certified Excellence</h3>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-5xl">verified</span>
              <span className="text-[10px] font-bold">ISO 14001</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-5xl">forest</span>
              <span className="text-[10px] font-bold">FSC CERTIFIED</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-5xl">public</span>
              <span className="text-[10px] font-bold">ONTEX PARTNER</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-5xl">energy_savings_leaf</span>
              <span className="text-[10px] font-bold">PEFC CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;