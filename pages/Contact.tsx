
import React, { useState } from 'react';

const provinces = ['Bagmati', 'Koshi', 'Lumbini', 'Gandaki', 'Madhesh'];

const branches = [
  {
    id: 1,
    name: 'Kathmandu HQ Office',
    tag: 'Main Hub',
    addr: 'Maharajgunj, Ward No. 3, Kathmandu',
    mgr: 'Rajesh Hamal',
    phone: '+977-9851476666',
    province: 'Bagmati',
    type: 'hub'
  },
  {
    id: 2,
    name: 'Hetauda Regional Depot',
    tag: 'Warehouse',
    addr: 'Industrial District, Hetauda, Makwanpur',
    mgr: 'Sunita Gurung',
    phone: '+977-57-520XXX',
    province: 'Bagmati',
    type: 'warehouse'
  },
  {
    id: 3,
    name: 'Chitwan Logistics Point',
    tag: 'Logistics',
    addr: 'Bharatpur-10, Hospital Road, Chitwan',
    mgr: 'Amit Shah',
    phone: '+977-56-590XXX',
    province: 'Bagmati',
    type: 'logistics'
  }
];

const faqs = [
  "How do I track my distribution order?",
  "Can I request a branch in my local province?",
  "What documents are needed for distribution partnership?"
];

const Contact: React.FC = () => {
  const [activeProvince, setActiveProvince] = useState('Bagmati');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col bg-[#f6f6f8]">
      {/* Hero Section */}
      <section className="px-4 sm:px-10 py-4 max-w-[1280px] mx-auto w-full">
        <div className="mt-4 inline-flex items-center justify-center gap-2 bg-[#1152d4] rounded-full px-6 py-2 self-center border border-[#1152d4] shadow-lg">
              <span className="material-symbols-outlined text-white text-sm">headset_mic</span>
              <span className="text-white font-medium text-sm">Customer Support Hotline: +977-9851476666</span>
            </div>
      </section>

      {/* Branch Locator Section Header */}
      <section className="px-4 sm:px-10 max-w-[1280px] mx-auto w-full mb-8">
        <div className="flex flex-col gap-2 border-l-4 border-[#1152d4] pl-4">
          <h2 className="text-[#111318] text-3xl font-black tracking-[-0.015em]">Distribution Network</h2>
          <p className="text-gray-500 font-medium">Find our regional warehouses and main distribution offices near you.</p>
        </div>
      </section>

      {/* Interactive Branch Locator */}
      <section className="px-4 sm:px-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px] mb-20">
        {/* Left Side: Branch List */}
        <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl border border-[#dbdfe6] overflow-hidden shadow-sm">
          {/* Province Tabs */}
          <div className="border-b border-[#dbdfe6] overflow-x-auto no-scrollbar">
            <div className="flex px-4 gap-6 whitespace-nowrap">
              {provinces.map(prov => (
                <button 
                  key={prov}
                  onClick={() => setActiveProvince(prov)}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 transition-all ${
                    activeProvince === prov 
                    ? 'border-b-[#1152d4] text-[#1152d4]' 
                    : 'border-b-transparent text-[#616f89] hover:text-[#1152d4]'
                  }`}
                >
                  <p className="text-sm font-black">{prov}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-4 bg-gray-50 border-b border-[#dbdfe6]">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dbdfe6] bg-white text-sm focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] transition-all outline-none" 
                placeholder="Search by city or manager..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Scrollable Cards */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 max-h-[500px] lg:max-h-full">
            {branches
              .filter(b => b.province === activeProvince)
              .filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()) || b.mgr.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(branch => (
                <div key={branch.id} className="p-5 rounded-2xl border border-[#dbdfe6] bg-white hover:border-[#1152d4] transition-all group cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-black text-lg text-[#111318] group-hover:text-[#1152d4] transition-colors">{branch.name}</h3>
                    <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded ${
                      branch.type === 'hub' ? 'bg-blue-100 text-[#1152d4]' : 
                      branch.type === 'warehouse' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {branch.tag}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-500 font-medium">
                    <p className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#1152d4] text-lg mt-0.5">location_on</span>
                      <span>{branch.addr}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1152d4] text-lg">person</span>
                      <span>Manager: {branch.mgr}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1152d4] text-lg">call</span>
                      <span>{branch.phone}</span>
                    </p>
                  </div>
                  <button className="w-full mt-5 flex items-center justify-center gap-2 py-2.5 border-2 border-[#1152d4] text-[#1152d4] font-black text-xs rounded-xl hover:bg-[#1152d4] hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">map</span> VIEW ON MAP
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Right Side: Interactive Map Placeholder */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#dbdfe6] overflow-hidden shadow-sm relative group min-h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4313875644484!2d85.318748!3d27.642121999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17005e1b894b%3A0x505a532702a5ca51!2sNEOM%20World%20Trade%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1769588783782!5m2!1sen!2snp"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
          
          {/* Map overlay with location link */}
          <div className="absolute top-4 right-4">
            <a 
              href="https://maps.app.goo.gl/u37U1EXpsGiwkZSp8?g_st=iwb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 hover:bg-white transition-all text-sm font-bold text-[#1152d4]"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              View in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Form and Sidebar */}
      <section className="px-4 sm:px-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="bg-white p-8 sm:p-12 rounded-[32px] border border-[#dbdfe6] shadow-sm">
            <h2 className="text-3xl font-black mb-8">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-black text-gray-700">Full Name</label>
                  <input className="w-full p-3.5 rounded-xl border border-[#dbdfe6] focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-black text-gray-700">Email Address</label>
                  <input className="w-full p-3.5 rounded-xl border border-[#dbdfe6] focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-black text-gray-700">Subject</label>
                <select className="w-full p-3.5 rounded-xl border border-[#dbdfe6] focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all bg-white">
                  <option>General Distribution Inquiry</option>
                  <option>Order Tracking</option>
                  <option>Product Complaint</option>
                  <option>Branch Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-black text-gray-700">Message</label>
                <textarea className="w-full p-4 rounded-xl border border-[#dbdfe6] focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all min-h-[150px]" placeholder="How can we help you today?" rows={4}></textarea>
              </div>
              <button className="w-full bg-[#1152d4] text-white font-black py-5 rounded-2xl hover:brightness-110 shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-black mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#1152d4] fill-icon">corporate_fare</span> Corporate Head Office
            </h3>
            <div className="space-y-6">
              {[
                { icon: 'location_on', title: 'Main Office', detail: 'Level 5, NEOM Tower, Maharajgunj-3, Kathmandu, Nepal' },
                { icon: 'mail', title: 'Email Us', detail: 'info@neom.com.np', link: true },
                { icon: 'share', title: 'Connect With Us', social: true }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="bg-blue-50 p-4 rounded-2xl h-fit text-[#1152d4] group-hover:bg-[#1152d4] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-sm text-gray-900">{item.title}</p>
                    {item.detail && <p className={`text-sm mt-1 leading-relaxed ${item.link ? 'text-[#1152d4] font-bold underline' : 'text-gray-500 font-medium'}`}>{item.detail}</p>}
                    {item.social && (
                      <div className="flex gap-4 mt-3">
                        {['social_leaderboard', 'public', 'alternate_email'].map(s => (
                          <button key={s} className="size-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#1152d4] hover:border-[#1152d4] transition-all">
                            <span className="material-symbols-outlined text-xl">{s}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-[#1152d4] rounded-3xl text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-[140px] pointer-events-none group-hover:scale-110 transition-transform duration-700">emergency_home</span>
            <div className="relative z-10">
              <h4 className="font-black text-xl mb-3">Emergency Logistics</h4>
              <p className="text-blue-100 text-sm mb-6 font-medium leading-relaxed">
                Urgent medicine distribution or medical device support needed? Our rapid response team is available 24/7.
              </p>
              <a href="tel:+97714567890" className="flex items-center justify-center gap-3 text-sm font-black bg-white/10 hover:bg-white/20 py-3.5 rounded-xl transition-all border border-white/20">
                <span className="material-symbols-outlined text-lg">phone_in_talk</span> Priority Support Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-10 max-w-[1280px] mx-auto w-full mb-24">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-black">Common Questions</h2>
          <div className="w-20 h-1.5 bg-[#1152d4] mt-4 rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((q, idx) => (
            <div key={idx} className="border border-[#dbdfe6] rounded-2xl overflow-hidden shadow-sm group">
              <button className="w-full px-8 py-5 flex items-center justify-between bg-white text-left hover:bg-gray-50 transition-colors">
                <span className="font-bold text-gray-800 text-lg">{q}</span>
                <span className="material-symbols-outlined text-[#1152d4] font-black transition-transform group-hover:rotate-180">expand_more</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
