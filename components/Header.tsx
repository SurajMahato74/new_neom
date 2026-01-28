
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' },
  ];

  const accentLinks = [
    { name: 'Notices', path: '/notices', icon: 'campaign' },
    { name: 'Careers', path: '/careers', icon: 'person_search' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-white backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/new_neom/img/NEOMLOGO.png" 
            alt="NEOM Logo" 
            className="h-14 w-auto transform group-hover:scale-110 transition-transform"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6 border-r border-gray-200 pr-6">
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-bold tracking-tight transition-all relative py-1 ${
                  location.pathname === link.path 
                  ? 'text-[#0d7ff2]' 
                  : 'text-gray-600 hover:text-[#0d7ff2]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            {accentLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-black uppercase tracking-wider transition-all border ${
                  location.pathname === link.path
                  ? 'bg-[#0d7ff2] border-[#0d7ff2] text-white shadow-lg shadow-blue-100'
                  : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-[#0d7ff2] hover:text-[#0d7ff2]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOrderClick}
            className="hidden sm:flex items-center gap-2 bg-[#0d7ff2] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-blue-200"
          >
            Order Now
          </button>
          
          <a 
            href="https://www.daraz.com.np/shop/caj5pzzo/?spm=a2a0e.pdp_revamp.seller.1.140861f9NxHwT3&itemId=414763663&channelSource=pdp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-10 h-10 bg-[#ff6801] rounded-full hover:scale-110 transition-all shadow-md"
            title="Visit our Daraz store"
          >
            <img src="/new_neom/img/daraz.png" alt="Daraz" className="w-10 h-10 object-contain" />
          </a>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-[99] lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)} style={{ top: '88px' }}>
        <div 
          className="fixed left-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto"
          style={{ 
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
            top: '88px',
            height: 'calc(100vh - 88px)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-2">
            {primaryLinks.concat(accentLinks).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                  location.pathname === link.path 
                  ? 'bg-[#0d7ff2] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {'icon' in link && <span className="material-symbols-outlined">{link.icon}</span>}
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button 
                onClick={onOrderClick}
                className="w-full bg-[#0d7ff2] text-white p-4 rounded-xl font-bold shadow-lg"
              >
                Order Now
              </button>
              <a 
                href="https://www.daraz.com.np/shop/caj5pzzo/?spm=a2a0e.pdp_revamp.seller.1.140861f9NxHwT3&itemId=414763663&channelSource=pdp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#ff6801] text-white p-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
              >
                <img src="/new_neom/img/daraz.png" alt="Daraz" className="w-5 h-5 object-contain" />
                Visit Daraz Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
