
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003A70] text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-20 text-center md:text-left">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/new_neom/img/neom_logo.png" 
                alt="NEOM Logo" 
                className="h-8 md:h-10 w-auto"
              />
              <h2 className="text-xl md:text-3xl font-black tracking-tighter">NEOM</h2>
            </Link>
            <p className="text-blue-100/70 max-w-sm leading-relaxed text-sm md:text-lg font-medium">
              Official Ontex distributor | Trusted globally in 110+ countries | Hygiene expert
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              {/* Social icons removed */}
            </div>
          </div>
          
          <div>
            <h5 className="font-black text-sm md:text-lg mb-6 md:mb-8 tracking-tight">Company</h5>
            <ul className="space-y-3 md:space-y-4 text-blue-100/60 font-bold text-xs md:text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/notices" className="hover:text-white transition-colors">Official Notices</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-sm md:text-lg mb-6 md:mb-8 tracking-tight">Marketplaces</h5>
            <div className="space-y-6">
              <a 
                href="https://www.daraz.com.np/shop/caj5pzzo/?spm=a2a0e.pdp_revamp.seller.1.140861f9NxHwT3&itemId=414763663&channelSource=pdp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-[#ff6801] hover:border-transparent transition-all shadow-xl shadow-black/10"
              >
                <div className="size-12 bg-[#ff6801] rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                  <img src="/new_neom/img/daraz.png" alt="Daraz" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Buy Online</p>
                  <p className="text-base font-black">Shop on Daraz</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-black text-sm md:text-lg mb-6 md:mb-8 tracking-tight">Contact HQ</h5>
            <div className="text-blue-100/60 space-y-4 md:space-y-5 text-xs md:text-sm font-bold leading-relaxed">
              <p className="flex gap-4"><span className="material-symbols-outlined text-[#0d7ff2]">location_on</span> Maharajgunj-3, Kathmandu, Nepal</p>
              <p className="flex gap-4"><span className="material-symbols-outlined text-[#0d7ff2]">mail</span> info@neom.com.np</p>
              <p className="flex gap-4"><span className="material-symbols-outlined text-[#0d7ff2]">call</span> +977-9851476666</p>
              <div className="flex gap-3 pt-2 justify-center md:justify-start">
                <span className="hidden md:inline bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-black">OPEN NOW</span>
                <span className="hidden md:inline text-[11px] font-medium opacity-50">Closing at 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
