import React from 'react';

const TikTokButton: React.FC = () => {
  const handleTikTokClick = () => {
    const tiktokUrl = 'https://www.tiktok.com/@tradewithneom?_r=1&_t=ZS-93JVA1Onvt7';
    
    // Try to open TikTok app first, fallback to web
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Try to open in TikTok app
      window.location.href = `tiktok://user?username=tradewithneom`;
      
      // Fallback to web after a short delay
      setTimeout(() => {
        window.open(tiktokUrl, '_blank');
      }, 1000);
    } else {
      // Desktop - open in new tab
      window.open(tiktokUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleTikTokClick}
      className="fixed bottom-24 right-6 z-[60] bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Follow us on TikTok"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.26z"/>
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:ml-3 font-bold text-sm">
        Follow us on TikTok
      </span>
    </button>
  );
};

export default TikTokButton;