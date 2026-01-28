import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    image: '/static/img/products/helen_5.jpeg'
  },
  {
    id: 'helen-harper-premium',
    name: 'Helen Harper Premium Diapers',
    category: 'Adult Care',
    brand: 'HELEN HARPER',
    price: 'Rs. 2,699',
    rating: 4.9,
    reviews: 89,
    image: '/static/img/products/helen_harper_4.jpeg'
  },
  {
    id: 'baby-charm-newborn',
    name: 'Baby Charm Newborn (Size 1)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,039',
    rating: 5.0,
    reviews: 156,
    image: '/static/img/products/babycharm_1_newborn.jpeg'
  },
  {
    id: 'baby-charm-maxi',
    name: 'Baby Charm Maxi (Size 4)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,219',
    rating: 4.7,
    reviews: 98,
    image: '/static/img/products/babycharm_4_maxi.jpeg'
  },
  {
    id: 'baby-charm-junior',
    name: 'Baby Charm Junior (Size 5)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,399',
    rating: 4.6,
    reviews: 67,
    image: '/static/img/products/babycharm_5_junior.jpeg'
  },
  {
    id: 'baby-charm-xl',
    name: 'Baby Charm XL (Size 6)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,579',
    rating: 4.5,
    reviews: 45,
    image: '/static/img/products/babycharm_6_xl.jpeg'
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('Most Popular');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const categories = ['All', 'Baby Care', 'Adult Care'];
  const brands = ['HELEN HARPER', 'BABY CHARM'];

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryMatch && brandMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'Price: High to Low':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'Highest Rated':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filters Toggle */}
        <div 
          className="lg:hidden flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-4 cursor-pointer"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <span className="font-bold">Filters</span>
          <span className={`material-symbols-outlined transition-transform ${showMobileFilters ? 'rotate-180' : ''}`}>expand_more</span>
        </div>

        {/* Mobile Filters Panel */}
        {showMobileFilters && (
          <div className="lg:hidden bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-4">
            <h3 className="text-lg font-black text-[#003A70] mb-4">Categories</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat ? 'bg-[#0d7ff2] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <h3 className="text-lg font-black text-[#003A70] mb-4">Brands</h3>
            <div className="space-y-3">
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="rounded border-gray-300 text-[#0d7ff2] focus:ring-[#0d7ff2]" 
                  />
                  <span className="text-sm font-medium text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
            <h3 className="text-xl font-black text-[#003A70] mb-6">Categories</h3>
            <div className="space-y-0">
              {categories.map(cat => (
                <div key={cat}>
                  <button 
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer ${
                      selectedCategory === cat ? 'bg-blue-50 text-[#0d7ff2] font-bold shadow-inner' : 'hover:bg-gray-50 text-gray-600 hover:text-[#0d7ff2]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-xl ${selectedCategory === cat ? 'fill-icon' : ''}`}>
                      {cat === 'Baby Care' ? 'child_care' : cat === 'Adult Care' ? 'blind' : 'category'}
                    </span>
                    <span className="text-[15px] font-medium">{cat}</span>
                  </button>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-black text-[#003A70] mb-6 mt-10">Brands</h3>
            <div className="space-y-4">
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="rounded-md border-gray-200 text-[#0d7ff2] focus:ring-[#0d7ff2] size-5" 
                  />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-[#0d7ff2]">{brand}</span>
                </label>
              ))}
            </div>

            <button className="w-full mt-10 bg-[#0d7ff2] text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-100 hover:brightness-110 active:scale-95 transition-all">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-[#003A70]">Our Collection <span className="text-gray-300 ml-2">({sortedProducts.length})</span></h2>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-sm text-gray-400 font-bold hidden sm:inline">SORT:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 sm:flex-none border-gray-100 rounded-xl text-sm font-bold bg-white focus:ring-[#0d7ff2] py-2.5 px-4 pr-10"
              >
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all group">
                <div className="bg-gray-50 aspect-square relative p-10 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white px-3 py-1.5 rounded-full text-[9px] font-black text-[#0d7ff2] uppercase shadow-sm border border-blue-50">Ontex Brand</span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-[#0d7ff2] uppercase tracking-wider">{product.brand}</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#0d7ff2] transition-colors leading-tight line-clamp-2 h-10">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-yellow-400">
                    <span className="material-symbols-outlined text-base fill-icon">star</span>
                    <span className="text-gray-900 font-black text-sm">{product.rating}</span>
                    <span className="text-gray-300 font-bold text-xs">({product.reviews})</span>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                    <p className="text-2xl font-black text-[#003A70]">{product.price}</p>
                    <Link to={`/product/${product.id}`} className="bg-[#0d7ff2] text-white size-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-100 hover:scale-110 active:scale-95 transition-all">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;