import React, { useState } from 'react';
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
    image: '/new_neom/img/products/helen_5.jpeg'
  },
  {
    id: 'helen-harper-premium',
    name: 'Helen Harper Premium Diapers',
    category: 'Adult Care',
    brand: 'HELEN HARPER',
    price: 'Rs. 2,699',
    rating: 4.9,
    reviews: 89,
    image: '/new_neom/img/products/helen_harper_4.jpeg'
  },
  {
    id: 'baby-charm-newborn',
    name: 'Baby Charm Newborn (Size 1)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,039',
    rating: 5.0,
    reviews: 156,
    image: '/new_neom/img/products/babycharm_1_newborn.jpeg'
  },
  {
    id: 'baby-charm-maxi',
    name: 'Baby Charm Maxi (Size 4)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,219',
    rating: 4.7,
    reviews: 98,
    image: '/new_neom/img/products/babycharm_4_maxi.jpeg'
  },
  {
    id: 'baby-charm-junior',
    name: 'Baby Charm Junior (Size 5)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,399',
    rating: 4.6,
    reviews: 67,
    image: '/new_neom/img/products/babycharm_5_junior.jpeg'
  },
  {
    id: 'baby-charm-xl',
    name: 'Baby Charm XL (Size 6)',
    category: 'Baby Care',
    brand: 'BABY CHARM',
    price: 'Rs. 2,579',
    rating: 4.5,
    reviews: 45,
    image: '/new_neom/img/products/babycharm_6_xl.jpeg'
  }
];

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProduct?: Product;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, preSelectedProduct }) => {
  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: number}>(preSelectedProduct ? { [preSelectedProduct.id]: 1 } : {});
  const [address, setAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setSelectedProducts(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      const newProducts = { ...selectedProducts };
      delete newProducts[productId];
      setSelectedProducts(newProducts);
    } else {
      setSelectedProducts(prev => ({ ...prev, [productId]: quantity }));
    }
  };

  const calculateTotal = () => {
    return Object.entries(selectedProducts).reduce((total: number, [productId, quantity]: [string, number]) => {
      const product = allProducts.find(p => p.id === productId);
      if (product) {
        const price = parseInt(product.price.replace(/[^0-9]/g, ''));
        return total + (price * quantity);
      }
      return total;
    }, 0);
  };

  const handleConfirmOrder = () => {
    if (Object.keys(selectedProducts).length === 0 || !address || !customerPhone) return;

    let orderDetails = `*NEW ORDER FROM NEOM WEBSITE*\n\n*PRODUCTS ORDERED:*\n`;
    
    Object.entries(selectedProducts).forEach(([productId, quantity]) => {
      const product = allProducts.find(p => p.id === productId);
      if (product) {
        const price = parseInt(product.price.replace(/[^0-9]/g, ''));
        const subtotal = price * quantity;
        orderDetails += `- ${product.name} (${product.brand})\n  Price: ${product.price} x ${quantity} = Rs. ${subtotal.toLocaleString()}\n\n`;
      }
    });

    orderDetails += `*TOTAL AMOUNT: Rs. ${calculateTotal().toLocaleString()}*\n\n*DELIVERY ADDRESS:*\n${address}\n\n*CUSTOMER CONTACT:*\n${customerPhone}\n\nPlease confirm this order and provide delivery timeline.\n\nThank you for choosing NEOM!`;

    const whatsappUrl = `https://wa.me/9779807768241?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form for next order
    setSelectedProducts({});
    setAddress('');
    setCustomerPhone('');
    setSearchTerm('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-start justify-center p-2 sm:p-4 overflow-y-auto pt-2">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-7xl w-full my-2 sm:my-4 shadow-2xl">
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-[#003A70]">Place Your Order</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Left Side - Product Selection */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d7ff2] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 sm:max-h-72 overflow-y-auto pr-2">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="border rounded-lg p-3 cursor-pointer transition-all hover:shadow-md border-gray-200 hover:border-gray-300"
                  >
                    <img src={product.image} alt={product.name} className="w-full h-16 object-contain rounded-lg mb-2" />
                    <div className="text-center">
                      <p className="font-bold text-xs mb-1 line-clamp-2 h-6">{product.name}</p>
                      <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                      <p className="text-xs font-bold text-[#0d7ff2]">{product.price}</p>
                      {selectedProducts[product.id] && (
                        <div className="mt-1 bg-[#0d7ff2] text-white text-xs px-2 py-1 rounded-full">
                          Added: {selectedProducts[product.id]}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Order Form */}
            <div className="w-full xl:w-80 bg-gray-50 rounded-xl p-4">
              {/* Selected Products Cart */}
              {Object.keys(selectedProducts).length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold text-gray-700 mb-2">Selected Items ({Object.keys(selectedProducts).length})</h3>
                  <div className="bg-white rounded-lg p-2 max-h-24 overflow-y-auto">
                    {Object.entries(selectedProducts).map(([productId, quantity]) => {
                      const product = allProducts.find(p => p.id === productId);
                      if (!product) return null;
                      return (
                        <div key={productId} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-b-0">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.price}</p>
                          </div>
                          <div className="flex items-center gap-1 ml-2">
                            <button
                              onClick={() => updateQuantity(productId, quantity - 1)}
                              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                            >
                              <span className="material-symbols-outlined text-xs">remove</span>
                            </button>
                            <span className="text-xs font-bold w-6 text-center">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(productId, quantity + 1)}
                              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                            >
                              <span className="material-symbols-outlined text-xs">add</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d7ff2] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Total Items</label>
                  <div className="bg-white rounded-lg p-2 border border-gray-300 text-center">
                    <span className="text-sm font-bold">{Object.values(selectedProducts).reduce((a: number, b: number) => a + b, 0)}</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1">Delivery Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your complete delivery address..."
                  rows={3}
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d7ff2] focus:border-transparent resize-none"
                />
              </div>

              {/* Order Summary */}
              {Object.keys(selectedProducts).length > 0 && (
                <div className="bg-white p-3 rounded-lg mb-4 border border-gray-200">
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">Order Total</h3>
                  <div className="flex justify-between text-sm font-bold text-[#0d7ff2]">
                    <span>Total:</span>
                    <span>Rs. {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <button
                onClick={handleConfirmOrder}
                disabled={Object.keys(selectedProducts).length === 0 || !address || !customerPhone}
                className="w-full bg-[#0d7ff2] text-white py-3 rounded-lg font-bold text-sm hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg mb-2"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">send</span>
                  Send Order via WhatsApp
                </span>
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-gray-500 text-white py-2 rounded-lg font-bold text-xs hover:bg-gray-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;