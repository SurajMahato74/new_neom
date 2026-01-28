import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';

const allProducts: Product[] = [
  {
    id: 'helen-harper-adult-care',
    name: 'Helen Harper Adult Care Premium',
    category: 'Adult Care',
    brand: 'HELEN HARPER',
    price: 'Rs. 2,999',
    rating: 4.8,
    reviews: 124,
    image: '/img/products/helen_5.jpeg'
  },
  {
    id: 'helen-harper-premium',
    name: 'Helen Harper Premium Diapers',
    category: 'Adult Care',
    brand: 'HELEN HARPER',
    price: 'Rs. 2,699',
    rating: 4.9,
    reviews: 89,
    image: '/img/products/helen_harper_4.jpeg'
  },
  {
    id: 'baby-charm-newborn',
    name: 'Baby Charm Newborn (Size 1)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,039',
    rating: 5.0,
    reviews: 156,
    image: '/img/products/babycharm_1_newborn.jpeg'
  },
  {
    id: 'baby-charm-maxi',
    name: 'Baby Charm Maxi (Size 4)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,219',
    rating: 4.7,
    reviews: 98,
    image: '/img/products/babycharm_4_maxi.jpeg'
  },
  {
    id: 'baby-charm-junior',
    name: 'Baby Charm Junior (Size 5)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,399',
    rating: 4.6,
    reviews: 67,
    image: '/img/products/babycharm_5_junior.jpeg'
  },
  {
    id: 'baby-charm-xl',
    name: 'Baby Charm XL (Size 6)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,579',
    rating: 4.5,
    reviews: 45,
    image: '/img/products/babycharm_6_xl.jpeg'
  }
];

const brandData = {
  'helen-harper': {
    name: 'Helen Harper',
    description: 'Premium adult hygiene solutions designed for ultimate comfort and dignity. Helen Harper has been a trusted name in adult care for over 25 years, providing innovative products that enhance quality of life.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoy7hMT40UREPX0YLsG9EG2FVkqLBTyi9uG4DNGvhX3CesSDL080SpYQ7ogQmvVlu0VEJpW0hZyNlGe37rjBII87cCTBrgmQFm1JnfaSIEDjsxT7WT83CSHAedJTCp-jYweO-My20P8HUGwJhDOqlJsP4Q0esMNkFZm2JaDcB9K_3lSdFZx915pRg7NKFCa0Opq901pC81et2PuHZ2Jsdt9IOl6e_OemwuKdU8_Lut4_i0a9oHXyMFWJ5RQqBxAg1r08cNPrFYi4s',
    features: [
      '12-Hour Dryness Protection',
      'Odor Neutralizing System', 
      'Dermatologically Tested',
      'Breathable Materials',
      'Secure Fit Technology'
    ],
    brandColor: '#8B5CF6'
  },
  'baby-charm': {
    name: 'Baby Charm',
    description: 'The gold standard in infant care. Baby Charm offers ultra-soft protection for your little ones, ensuring they stay dry and happy with innovative channel technology and premium materials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPm94kk8xnFdsROZB0FAaQA7sogPq9D9QIlUpSDEEBPUpK5DoJcLrzj9q7whtPVRFsDEA50_hI3-o8bv8dJK4uKLJ0oo6i57L9J7wGH9sBUWhRUNCfhO7WY0N4FBXo1Np4v1XjDpLAq5R3j2hhT88daeMxxCWaSHlc0pnjvBte1W4YpR6rhgIoUrm4Pek9dIi8VyzaP50OGIkJv3pVoQZuBHmWq1sHFmTQ-jNEyNWw1wmqU0W2iY7LJir2nZmET7N7PBd9cM7pJqU',
    features: [
      'Hypoallergenic & Soft',
      'Wetness Indicator',
      'Perfect Fit Elastic',
      'Channel Technology',
      'Premium Absorption'
    ],
    brandColor: '#F59E0B'
  }
};

const BrandDetail: React.FC = () => {
  const { brandId } = useParams<{ brandId: string }>();
  console.log('Brand ID:', brandId);
  const brand = brandData[brandId as keyof typeof brandData];
  console.log('Brand data:', brand);
  
  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Brand not found</h1>
          <p className="text-gray-600">Brand ID: {brandId}</p>
        </div>
      </div>
    );
  }

  const brandProducts = allProducts.filter(product => {
    if (brandId === 'helen-harper') {
      return product.brand === 'HELEN HARPER';
    } else if (brandId === 'baby-charm') {
      return product.brand === 'BABY CHARM';
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#0d7ff2]/10 rounded-full text-[#0d7ff2] font-bold text-sm uppercase tracking-widest">
                  Partner Brand
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-[#003A70]">{brand.name}</h1>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {brand.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#003A70]">Key Features</h3>
                <ul className="space-y-3">
                  {brand.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#0d7ff2]">check_circle</span>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <Link to="/products" className="bg-[#0d7ff2] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#0d7ff2]/20 hover:brightness-110 transition-all">
                  Shop Products
                </Link>
                <Link to="/contact" className="border-2 border-gray-200 px-8 py-3 rounded-full font-bold hover:border-[#0d7ff2] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-contain rounded-xl"
                style={{ backgroundImage: `url("${brand.image}")` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#003A70] mb-4">{brand.name} Products</h2>
            <p className="text-gray-600">Discover our complete range of {brand.name} products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="bg-gray-50 aspect-square relative p-8 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs font-black text-[#0d7ff2] uppercase tracking-wider">{product.brand}</p>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#0d7ff2] transition-colors leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-yellow-400">
                    <span className="material-symbols-outlined text-sm fill-icon">star</span>
                    <span className="text-gray-900 font-black text-sm">{product.rating}</span>
                    <span className="text-gray-300 font-bold text-xs">({product.reviews})</span>
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-gray-50">
                    <p className="text-xl font-black text-[#003A70]">{product.price}</p>
                    <div className="bg-[#0d7ff2] text-white size-10 rounded-full flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-110 transition-all">
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandDetail;