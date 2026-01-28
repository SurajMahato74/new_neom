
import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="flex flex-col">
    
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black">Open Positions</h2>
              <p className="text-gray-500 mt-1">Find your next career move at NEOM</p>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Search jobs..." className="border-gray-200 rounded-lg text-sm px-4 h-10 flex-1 sm:w-64" />
              <button className="p-2 border border-gray-200 rounded-lg flex-shrink-0"><span className="material-symbols-outlined">filter_list</span></button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Sales Representative', dept: 'Sales & Marketing', loc: 'Kathmandu' },
              { title: 'Logistics Manager', dept: 'Operations', loc: 'Birgunj' },
              { title: 'HR Specialist', dept: 'Human Resources', loc: 'Kathmandu' }
            ].map(job => (
              <div key={job.title} className="p-4 sm:p-6 bg-white border border-gray-100 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-lg transition-all border-l-4 border-l-[#0d7ff2]">
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">{job.title}</h4>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">business_center</span> {job.dept}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {job.loc}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Full-time</span>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 text-[#0d7ff2] font-bold hover:underline text-sm sm:text-base px-4 py-2 sm:px-0 sm:py-0 bg-blue-50 sm:bg-transparent rounded-lg sm:rounded-none">
                  <span className="sm:hidden">View</span>
                  <span className="hidden sm:inline">View Details</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
