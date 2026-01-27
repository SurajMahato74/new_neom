
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TikTokButton from './components/TikTokButton';
import ScrollToTop from './components/ScrollToTop';
import OrderModal from './components/OrderModal';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import BrandDetail from './pages/BrandDetail';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';

const App: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header onOrderClick={() => setIsOrderModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOrderClick={() => setIsOrderModalOpen(true)} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/brand/:brandId" element={<BrandDetail />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <TikTokButton />
      </div>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </BrowserRouter>
  );
};

export default App;
