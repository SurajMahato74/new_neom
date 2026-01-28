
import React, { useState } from 'react';
import OrderModal from '../components/OrderModal';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const currentProduct: Product = {
    id: 'helen-harper-premium',
    name: 'Helen Harper Premium Diapers',
    category: 'Adult Care',
    brand: 'HELEN HARPER',
    price: 'Rs. 2,699',
    rating: 4.9,
    reviews: 89,
    image: 'img/products/helen_harper_4.jpeg'
  };

  return (
    <div className="max-w-[1280px] mx-auto px-10 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <span className="material-symbols-outlined text-base">home</span> Home / Products / Baby Care / Helen Helper Diapers
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-white border border-gray-100 rounded-2xl p-10 relative group overflow-hidden">
            <img 
              src="img/products/helen_harper_4.jpeg" 
              alt="Helen Harper Premium Diapers" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-6 left-6 bg-[#0d7ff2] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Best Seller</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer hover:border-[#0d7ff2] transition-colors p-2">
              <img src="img/products/helen_5.jpeg" className="w-full h-full object-cover rounded-lg" alt="Helen Harper" />
            </div>
            <div className="aspect-square bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer hover:border-[#0d7ff2] transition-colors p-2">
              <img src="img/products/babycharm_1_newborn.jpeg" className="w-full h-full object-cover rounded-lg" alt="Baby Charm Newborn" />
            </div>
            <div className="aspect-square bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer hover:border-[#0d7ff2] transition-colors p-2">
              <img src="img/products/babycharm_4_maxi.jpeg" className="w-full h-full object-cover rounded-lg" alt="Baby Charm Maxi" />
            </div>
            <div className="aspect-square bg-gray-50 flex items-center justify-center rounded-xl cursor-pointer">
              <span className="material-symbols-outlined text-3xl text-gray-300">play_circle</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-[#0d7ff2] px-3 py-1 rounded-full text-xs font-bold uppercase">
              <span className="material-symbols-outlined text-sm">verified</span> Authorized Distributor
            </span>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">Helen Helper Premium Baby Diapers</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill-icon">star</span>)}
                <span className="text-gray-900 font-bold ml-2">4.8</span>
              </div>
              <span className="text-gray-400 text-sm">(120 customer reviews)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Key Features</h3>
            <ul className="grid grid-cols-2 gap-4">
              {['Japanese Sandia SAP', 'USA Fluff Pulp', '12-hour leak protection', 'Ultra-breathable backsheet'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-[#0d7ff2] text-lg">check_circle</span> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Size</label>
              <select className="w-full border-gray-200 rounded-lg text-sm bg-gray-50">
                <option>Small (S)</option>
                <option>Medium (M)</option>
                <option>Large (L)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Pack Type</label>
              <select className="w-full border-gray-200 rounded-lg text-sm bg-gray-50">
                <option>Single Pack</option>
                <option>Jumbo Pack</option>
              </select>
            </div>
          </div>

          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-gray-400 line-through">Rs. 2,999</p>
                <p className="text-3xl font-black text-[#0d7ff2]">Rs. 2,219 <span className="text-sm font-medium text-gray-400">/ pack</span></p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-xs">SAVE 25%</span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center border border-gray-200 rounded-xl px-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 text-gray-400 hover:text-gray-900"><span className="material-symbols-outlined">remove</span></button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-2 text-gray-400 hover:text-gray-900"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button onClick={() => setIsOrderModalOpen(true)} className="flex-1 bg-[#0d7ff2] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-lg">
                <span className="material-symbols-outlined">shopping_bag</span> Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100 mt-20">
        {[
          { icon: 'sanitizer', title: 'Hygienic Packaging', desc: 'Double-sealed for safety' },
          { icon: 'verified_user', title: 'ISO Certified', desc: 'Manufactured by Ontex' },
          { icon: 'local_shipping', title: 'Fast Delivery', desc: 'Quick shipping across Nepal' }
        ].map(item => (
          <div key={item.title} className="flex items-center gap-4 p-4">
            <div className="size-14 bg-blue-50 text-[#0d7ff2] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <div>
              <p className="font-bold text-gray-900">{item.title}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div className="flex border-b border-gray-200">
          {['Description', 'Specifications', 'Usage Guide'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${
                activeTab === tab ? 'border-[#0d7ff2] text-[#0d7ff2]' : 'border-transparent text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-10 text-gray-600 leading-relaxed max-w-4xl">
          <p className="text-lg">
            Helen Helper Premium Baby Diapers are engineered with advanced Ontex technology to provide superior comfort and protection for your little ones. Featuring high-grade Japanese Sandia Super Absorbent Polymer (SAP) and premium USA Fluff Pulp.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-bold text-[#0d7ff2] mb-4">Core Benefits</h4>
              <ul className="space-y-3">
                <li>• Ultra-breathable backsheet allows air circulation</li>
                <li>• Wetness indicator turns blue when wet</li>
                <li>• Elastic waistband for flexible fit</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-bold text-[#0d7ff2] mb-4">Technical Specs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-1"><span>Absorbency</span> <span>800ml - 1200ml</span></div>
                <div className="flex justify-between border-b pb-1"><span>Material</span> <span>Non-woven textile</span></div>
                <div className="flex justify-between border-b pb-1"><span>Origin</span> <span>Ontex Worldwide</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        preSelectedProduct={currentProduct}
      />
    </div>
  );
};

export default ProductDetail;
