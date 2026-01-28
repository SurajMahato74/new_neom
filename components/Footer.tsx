
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
                src="/static/img/neom_logo.png" 
                alt="NEOM Logo" 
                className="h-8 md:h-10 w-auto"
              />
              <h2 className="text-xl md:text-3xl font-black tracking-tighter">NEOM</h2>
            </Link>
            <p className="text-blue-100/70 max-w-sm leading-relaxed text-sm md:text-lg font-medium">
              Official Ontex distributor | Trusted globally in 110+ countries | Hygiene expert
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Facebook */}
              <a href="https://facebook.com/neomnepal" target="_blank" rel="noreferrer" className="size-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0d7ff2] hover:scale-110 transition-all border border-white/5 group">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@tradewithneom?_r=1&_t=ZS-93JVA1Onvt7" target="_blank" rel="noreferrer" className="size-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#000000] hover:scale-110 transition-all border border-white/5 p-2.5 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62.02 5.24-.02 7.86-.03 1.34-.36 2.71-1.05 3.89-.7 1.22-1.78 2.22-3.07 2.78-1.21.55-2.58.74-3.89.54-1.3-.2-2.55-.83-3.53-1.73-.99-.9-1.68-2.11-1.95-3.4-.28-1.3-.12-2.7.46-3.89.57-1.2 1.58-2.2 2.77-2.81 1.2-.62 2.59-.83 3.92-.61 1.33.22 2.56.88 3.5 1.83.02-1.01.03-2.01.03-3.02-.95-.62-2.02-1-3.14-1.12-1.24-.13-2.52.05-3.69.54-1.22.51-2.27 1.4-2.98 2.53-.7 1.12-1.05 2.45-1.03 3.77.01 1.34.38 2.68 1.09 3.82.72 1.16 1.81 2.11 3.06 2.66 1.25.55 2.65.7 4 .43 1.35-.27 2.59-.97 3.52-2 1.05-1.18 1.59-2.73 1.62-4.29.02-3.48-.01-6.96-.01-10.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/neomnepal" target="_blank" rel="noreferrer" className="size-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:scale-110 transition-all border border-white/5 group">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
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
                  <img src="/static/img/daraz.png" alt="Daraz" className="w-full h-full object-contain" />
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
              <div className="flex gap-3 pt-2">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-black">OPEN NOW</span>
                <span className="text-[11px] font-medium opacity-50">Closing at 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
