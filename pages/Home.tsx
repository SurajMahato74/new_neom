import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const tiktokVideos = [
  {
    id: '1',
    url: 'https://www.tiktok.com/@tradewithneom/video/7589672148684262677',
    thumbnail: '/new_neom/img/thumb/ta.png',
    title: 'Product Showcase'
  },
  {
    id: '2', 
    url: 'https://www.tiktok.com/@tradewithneom/video/7599903293044821269',
    thumbnail: '/new_neom/img/thumb/tb.png',
    title: 'Customer Review'
  },
  {
    id: '3',
    url: 'https://www.tiktok.com/@tradewithneom/video/7590774005053803796', 
    thumbnail: '/new_neom/img/thumb/tc.png',
    title: 'Product Demo'
  },
  {
    id: '4',
    url: 'https://www.tiktok.com/@tradewithneom/video/7599268327420300565',
    thumbnail: '/new_neom/img/thumb/td.png',
    title: 'Behind the Scenes'
  }
];

const slides = [
  {
    image: "/new_neom/img/car1.png",
    title: "Authorized Brand Seller and Distributor of Ontex Products",
    subtitle: "We sell premium Baby Charm and Helen Harper diapers - trusted hygiene solutions for families across Nepal."
  }
];

const stats = [
  { icon: 'package_2', count: '100', label: 'Neom Products' },
  { icon: 'local_shipping', count: '7', label: 'Neom Distributors', highlight: true },
  { icon: 'history_edu', count: '2', label: 'Our Experience' },
  { icon: 'verified', count: '4', label: 'Partner Brands' }
];

interface HomeProps {
  onOrderClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onOrderClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const extractVideoId = (url: string) => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : '';
  };

  return (
    <div className="flex flex-col font-['Public_Sans',_sans-serif] bg-[#f5f7f8]">
      {/* Hero Carousel Section */}
      <section className="w-full">
        <div className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center bg-[#101922]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${slide.image})` 
                }}
              />
              <div className="relative h-full flex flex-col justify-center items-center text-center px-8 md:px-20 space-y-8 mt-16">
                <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center">
                  <Link to="/products" className="bg-[#0d7ff2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0d7ff2]/90 transition-all flex items-center gap-2 shadow-lg shadow-[#0d7ff2]/20">
                    Our Products <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <button 
                    onClick={onOrderClick}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-[#0d7ff2]' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* TikTok Stories Section */}
      <section className="py-4 bg-[#f5f7f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-gray-600 mt-2">Watch our latest product videos and customer reviews</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {tiktokVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.url)}
                className="flex-shrink-0 w-24 h-32 bg-gray-200 rounded-xl cursor-pointer hover:scale-105 transition-transform relative group"
                style={{ backgroundImage: `url('${video.thumbnail}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-bold truncate">{video.title}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">play_arrow</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Intro & Stats Section */}
      <section className="py-4 bg-white mt-8">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 bg-[#0d7ff2]/10 rounded-full text-[#0d7ff2] font-bold text-xs uppercase tracking-widest">About NEOM</div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">NEOM</h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#0d7ff2] leading-tight">Authorized Brand Seller and Distributor of Ontex Products</h3>
            <p className="text-base text-[#60758a] leading-normal font-medium pt-2 text-justify">
              This page represents Neom, one of the authorized distributors of Ontex products in Nepal. Neom specializes in delivering high-quality baby care, feminine hygiene, and incontinence care products across all 7 provinces. As a trusted brand representative, Neom ensures hygienic and reliable product distribution throughout Nepal.
            </p>
            <div className="pt-2">
              <Link to="/sustainability" className="border-2 border-[#0d7ff2] text-[#0d7ff2] hover:bg-[#0d7ff2] hover:text-white px-8 py-3 rounded-full font-bold transition-all inline-block">
                Learn Our Mission
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-2xl border border-[#0d7ff2]/10 flex flex-col items-center text-center space-y-2 hover:shadow-xl hover:-translate-y-1 transition-all ${
                  stat.highlight ? 'bg-[#0d7ff2] text-white border-transparent' : 'bg-[#f5f7f8] text-[#111418]'
                }`}
              >
                <span className={`material-symbols-outlined text-4xl mb-2 ${stat.highlight ? 'text-white' : 'text-[#0d7ff2]'}`}>{stat.icon}</span>
                <p className={`text-3xl font-black ${stat.highlight ? 'text-white' : 'text-[#0d7ff2]'}`}>{stat.count}</p>
                <p className={`text-xs font-bold uppercase ${stat.highlight ? 'opacity-80' : 'text-[#60758a]'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* TikTok Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-8" onClick={() => setSelectedVideo(null)}>
          <div className="relative bg-black w-full max-w-sm h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <iframe
              src={`https://www.tiktok.com/embed/v2/${extractVideoId(selectedVideo)}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              className="w-full h-full"
              style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}
            />
          </div>
        </div>
      )}

      {/* Our Products */}
      <section className="py-4 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-3xl font-black">Our Products</h3>
              <Link to="/products" className="text-[#0d7ff2] font-black text-xs sm:text-sm uppercase tracking-widest hover:underline">See More Products</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'helen-harper-adult-care', name: "Helen Harper Adult Care", desc: "Premium comfort for active lifestyles.", image: "/new_neom/img/products/helen_5.jpeg" },
                { id: 'baby-charm-newborn', name: "Baby Charm Newborn", desc: "Ultra-soft protection for newborns.", image: "/new_neom/img/products/babycharm_1_newborn.jpeg" },
                { id: 'baby-charm-maxi', name: "Baby Charm Maxi", desc: "Perfect fit for growing babies.", image: "/new_neom/img/products/babycharm_4_maxi.jpeg" },
                { id: 'helen-harper-premium', name: "Helen Harper Premium", desc: "Dignity and comfort for adults.", image: "/new_neom/img/products/helen_harper_4.jpeg" }
              ].map((product, i) => (
                <Link key={i} to={`/product/${product.id}`} className="bg-[#f5f7f8] p-6 rounded-2xl border border-gray-100 space-y-4 hover:shadow-lg transition-all cursor-pointer group block">
                  <div className="w-full h-40 bg-gray-200 rounded-xl bg-cover bg-center group-hover:scale-105 transition-transform" style={{ backgroundImage: `url('${product.image}')` }}></div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-[#0d7ff2] transition-colors">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-4 space-y-24 bg-[#f5f7f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black">Our Partner Brands</h2>
            <div className="w-16 h-1.5 bg-[#0d7ff2] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Row 1: Helen Harper */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl shadow-[#0d7ff2]/5 border border-gray-100">
              <div className="aspect-square bg-center bg-no-repeat bg-contain rounded-xl" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoy7hMT40UREPX0YLsG9EG2FVkqLBTyi9uG4DNGvhX3CesSDL080SpYQ7ogQmvVlu0VEJpW0hZyNlGe37rjBII87cCTBrgmQFm1JnfaSIEDjsxT7WT83CSHAedJTCp-jYweO-My20P8HUGwJhDOqlJsP4Q0esMNkFZm2JaDcB9K_3lSdFZx915pRg7NKFCa0Opq901pC81et2PuHZ2Jsdt9IOl6e_OemwuKdU8_Lut4_i0a9oHXyMFWJ5RQqBxAg1r08cNPrFYi4s")` }}></div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-icon text-xl">star</span>)}
                <span className="text-gray-500 text-sm font-bold ml-2">(4.9/5)</span>
              </div>
              <h3 className="text-4xl font-bold text-[#111418]">Helen Harper Adult Care</h3>
              <p className="text-lg text-[#60758a] leading-relaxed">
                Premium adult hygiene solutions designed for ultimate comfort and dignity. Featuring breathable materials and high-absorption technology to ensure confidence throughout the day and night.
              </p>
              <ul className="space-y-3 pb-4">
                <li className="flex items-center gap-2 text-[#111418] font-medium"><span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span> 12-Hour Dryness Protection</li>
                <li className="flex items-center gap-2 text-[#111418] font-medium"><span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span> Odor Neutralizing System</li>
                <li className="flex items-center gap-2 text-[#111418] font-medium"><span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span> Dermatologically Tested</li>
              </ul>
              <div className="flex gap-4">
                <Link to="/brand/helen-harper" className="border-2 border-gray-200 px-8 py-3 rounded-full font-bold hover:border-[#0d7ff2] transition-colors">Details</Link>
              </div>
            </div>
          </div>

          {/* Row 2: Baby Charm */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mt-32">
            <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl shadow-[#0d7ff2]/5 border border-gray-100">
              <div className="aspect-square bg-center bg-no-repeat bg-contain rounded-xl" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPm94kk8xnFdsROZB0FAaQA7sogPq9D9QIlUpSDEEBPUpK5DoJcLrzj9q7whtPVRFsDEA50_hI3-o8bv8dJK4uKLJ0oo6i57L9J7wGH9sBUWhRUNCfhO7WY0N4FBXo1Np4v1XjDpLAq5R3j2hhT88daeMxxCWaSHlc0pnjvBte1W4YpR6rhgIoUrm4Pek9dIi8VyzaP50OGIkJv3pVoQZuBHmWq1sHFmTQ-jNEyNWw1wmqU0W2iY7LJir2nZmET7N7PBd9cM7pJqU")` }}></div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-icon text-xl">star</span>)}
                <span className="text-gray-500 text-sm font-bold ml-2">(5.0/5)</span>
              </div>
              <h3 className="text-4xl font-bold text-[#111418]">Baby Charm Premium</h3>
              <p className="text-lg text-[#60758a] leading-relaxed">
                The gold standard in infant care. Baby Charm offers ultra-soft protection for your little ones, ensuring they stay dry and happy with our innovative channel technology.
              </p>
              <ul className="space-y-3 pb-4">
                <li className="flex items-center gap-2 text-[#111418] font-medium"><span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span> Hypoallergenic & Soft</li>
                <li className="flex items-center gap-2 text-[#111418] font-medium"><span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span> Wetness Indicator</li>
                <li className="flex items-center gap-2 text-[#111418] font-medium"><span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span> Perfect Fit Elastic</li>
              </ul>
              <div className="flex gap-4">
                <Link to="/brand/baby-charm" className="border-2 border-gray-200 px-8 py-3 rounded-full font-bold hover:border-[#0d7ff2] transition-colors">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="relative py-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXbIhhS_lJKdU8vaWNNwDacqnhaNljCXLNWNAePIK-851iBgp0rSfJeUNdlEcM7gKBGCYgW_fPnV9OrWBAOmmEKylDcWcblyJr1Zrm6IVklQCyzaPnieGS0uZ3-cKEGL5lUNUC7Dzw5YCIq5sEUPUHjqq-z_AHZmkfWnT0Okzui4H8WrryV89GqUZPPl96hyWO71-TLXxBOuaQOl031zkuHqCXYhqzSA9d859CIbVvopAooMM4ikmslVz6w7FmSJurJ6WybnLIKLo")' }}
        ></div>
        <div className="absolute inset-0 bg-[#003A70]/80 backdrop-blur-[2px]"></div>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center text-white space-y-12">
          <div className="space-y-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Committed to a Sustainable Future</h2>
            <p className="text-lg opacity-90 font-medium">
              At NEOM, we believe in distributing products that not only protect people but also our planet. Our partnership with Ontex ensures that every product follows the highest environmental standards.
            </p>
            <Link to="/sustainability" className="bg-white text-[#003A70] px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all inline-block shadow-xl">
              Discover Our Initiatives
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {[
              { icon: 'eco', title: 'Planet', desc: 'Reducing carbon footprint through optimized supply chain and eco-packaging.', color: 'text-green-400' },
              { icon: 'groups', title: 'People', desc: 'Supporting local communities and ensuring ethical labor practices throughout Nepal.', color: 'text-blue-400' },
              { icon: 'balance', title: 'Business', desc: 'Maintaining transparency and integrity in every distribution partnership.', color: 'text-yellow-400' }
            ].map(card => (
              <Link key={card.title} to="/sustainability" className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl space-y-4 hover:bg-white/20 transition-all cursor-pointer text-left block">
                <span className={`material-symbols-outlined text-4xl ${card.color} fill-icon`}>{card.icon}</span>
                <h4 className="text-xl font-bold">{card.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed font-medium">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;