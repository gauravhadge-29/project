import React from 'react';

function Jobcards({ item }) {
  return (
    <div className="mb-8 mt-20 hover:shadow-blue-500 duration-300 hover:shadow-2xl">
      <div className="h-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 
        transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Company Logo/Name Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">
                  {item.companyname.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors line-clamp-1">
                {item.companyname}
              </h2>
            </div>
            <span className="px-3 py-1 text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full">
              New
            </span>
          </div>

          {/* Job Title */}
          <h3 className="text-xl font-semibold text-blue-600 mb-4 line-clamp-1">
            {item.jobtitle}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-4 bg-slate-50 p-3 rounded-xl">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="font-medium">{item.location}</span>
          </div>

          {/* Job Description */}
          <p className="text-gray-600 mb-8 line-clamp-3 bg-slate-50 p-4 rounded-xl">
            {item.jd}
          </p>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">Full Time</span>
            <span className="px-3 py-1 text-sm bg-purple-50 text-purple-600 rounded-full">Remote</span>
            <span className="px-3 py-1 text-sm bg-orange-50 text-orange-600 rounded-full">Senior Level</span>
          </div>

          {/* Action Button */}
          <div className="flex justify-end">
            <button className="group px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold 
              hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 
              shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]
              flex items-center gap-2">
              Apply Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobcards;
