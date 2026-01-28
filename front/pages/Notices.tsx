
import React from 'react';
import { Notice } from '../types';

const announcements: Notice[] = [
  {
    id: '1',
    title: 'Upcoming Public Holiday Operations Schedule',
    date: 'Oct 22, 2024',
    month: 'Oct',
    day: '22',
    description: 'Please review the adjusted operating hours for our collection centers during the upcoming national holiday week.',
    tags: ['Operations', 'Urgent']
  },
  {
    id: '2',
    title: 'System Maintenance: Logistics Portal Downtime',
    date: 'Oct 15, 2024',
    month: 'Oct',
    day: '15',
    description: 'Our tracking systems will undergo scheduled maintenance on Sunday from 02:00 to 06:00 UTC.',
    tags: ['IT Support']
  },
  {
    id: '3',
    title: 'Revised Shipping Guidelines for Q4 2024',
    date: 'Oct 08, 2024',
    month: 'Oct',
    day: '08',
    description: 'Updated packaging and documentation requirements for international shipments effective immediately.',
    tags: ['Policy', 'Shipping']
  }
];

const Notices: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Official Notices & Announcements</h1>
        <p className="text-gray-500 mt-2 text-lg">Stay informed with the latest updates from NEOM logistics and distribution.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          {/* Featured Breaking News */}
          <section className="group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-blue-100 flex flex-col md:flex-row">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[#0d7ff2] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">campaign</span> Breaking News
              </span>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoKFEQAF7vEyhyeaJtzx3Kep6_Y0EX7z_0idvLBuUPYyCj_CFfcYNdpQMsO4KgPo-uI8myYqbL45XdqGjXKKihHOY51GIXCZAkiHOoWA7xkfK_4lU3caagTRWySg2qcoAC-tIqunwxfAdRQnjtUl_VnuQMcmk4Y_3KoySOWrhlkmSoCoFas2qpX8DzRtRPXho_K0cX1mRveXVw0HhM6oTU3vABD8nsMbfqGocL-ORRJeuKCs8FxRdQHn7LW6A34pOn1uhw6bjbJrU')` }} />
            <div className="p-8 md:w-1/2 space-y-4">
              <p className="text-[#0d7ff2] text-sm font-semibold">October 24, 2024</p>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">New Distribution Center Opening in Province 1</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are proud to announce the expansion of our logistics network with a state-of-the-art facility designed to double processing capacity.
              </p>
              <div className="flex gap-4 pt-2">
                <button className="bg-[#0d7ff2] text-white font-bold h-11 px-6 rounded-lg text-sm">Read Full Story</button>
                <button className="flex items-center gap-2 text-[#0d7ff2] font-bold text-sm"><span className="material-symbols-outlined">picture_as_pdf</span> PDF</button>
              </div>
            </div>
          </section>

          {/* Recent List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-gray-100 pb-2">Recent Announcements</h3>
            {announcements.map((notice) => (
              <div key={notice.id} className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-blue-100 transition-all flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xs font-bold uppercase text-gray-400">{notice.month}</span>
                  <span className="text-2xl font-bold text-[#0d7ff2]">{notice.day}</span>
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{notice.title}</h4>
                    <button className="text-gray-400 hover:text-[#0d7ff2]"><span className="material-symbols-outlined">download</span></button>
                  </div>
                  <p className="text-sm text-gray-500">{notice.description}</p>
                  <div className="flex gap-2">
                    {notice.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-500 rounded uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-medium hover:border-[#0d7ff2] hover:text-[#0d7ff2] transition-all">
            Load More Notices
          </button>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50">
            <h5 className="font-bold mb-6">Archives</h5>
            <div className="space-y-2">
              {[2024, 2023, 2022].map(year => (
                <button key={year} className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${year === 2024 ? 'bg-blue-50 text-[#0d7ff2]' : 'hover:bg-gray-50 text-gray-600'}`}>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-bold text-sm">{year} Archives</span>
                  </div>
                  {year === 2024 && <span className="bg-[#0d7ff2] text-white px-2 py-0.5 rounded-full text-[10px]">12</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#0d7ff2] p-8 rounded-2xl text-white space-y-4 relative overflow-hidden shadow-xl">
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-[160px]">mail</span>
            <h5 className="text-xl font-bold">Stay Updated</h5>
            <p className="text-white/80 text-sm leading-relaxed">Subscribe to receive official NEOM distribution notices directly in your inbox.</p>
            <div className="space-y-3 relative z-10">
              <input type="email" placeholder="Email address" className="w-full bg-white/20 border-white/30 rounded-lg placeholder:text-white/60 focus:ring-white" />
              <button className="w-full bg-white text-[#0d7ff2] font-bold py-3 rounded-lg text-sm shadow-lg">Subscribe to Alerts</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Notices;
