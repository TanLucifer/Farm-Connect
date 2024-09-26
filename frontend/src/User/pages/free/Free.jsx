import React from 'react';
import { Search, Mic } from 'lucide-react';

const FreelancePortal = () => {
  return (
    <div className="bg-[#dae6e6] min-h-screen p-8 font-sans">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-2xl text-black tracking-widest">::: CONNECT</div>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black tracking-wide">Find freelancers</a>
          <a href="#" className="text-gray-700 hover:text-black tracking-wide">Find jobs</a>
          <a href="#" className="text-gray-700 hover:text-black tracking-wide">About</a>
          <a href="#" className="text-gray-700 hover:text-black tracking-wide">Solutions</a>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-gray-700 hover:text-black tracking-wide">Log in</button>
          <button className="px-4 py-2 bg-black text-white rounded-full tracking-wide">Join us</button>
        </div>
      </header>

      <main className="flex">
        <div className="w-2/3">
          <h1 className="text-8xl font-bold mb-8 text-white tracking-widest">FREELANCE</h1>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for any services..."
              className="w-full py-3 px-4 pr-12 rounded-full bg-white text-gray-700"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <Mic className="text-gray-400" />
              <Search className="text-gray-400" />
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            {['web design', 'UI/UX design', 'databases', 'business cards'].map(skill => (
              <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 tracking-wide">{skill}</span>
            ))}
          </div>
          <p className="text-gray-700 mb-8 tracking-wide">
            A freelance service web portal connects businesses with freelancers, facilitating project collaboration and hiring
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <h3 className="font-semibold mb-2 text-gray-800 tracking-wide">Trusted Freelancers</h3>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600 tracking-wide">200+ Satisfied Customers</p>
          </div>
        </div>
        <div className="w-1/3 relative">
          <img src="/api/placeholder/400/500" alt="Freelancer working" className="absolute bottom-0 right-0" />
          <div className="absolute bottom-20 right-20 bg-white rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800 tracking-wide">@jenny</p>
                <p className="text-sm text-gray-600 tracking-wide">UI/UX Designer</p>
              </div>
            </div>
            <p className="text-sm mb-1 text-gray-600 tracking-wide">80+ projects completed</p>
            <p className="font-semibold text-gray-800 tracking-wide">$30 per hour</p>
          </div>
        </div>
      </main>
      <div className="mt-8 text-3xl font-bold text-black tracking-widest">POPULAR SERVICES</div>
    </div>
  );
};

export default FreelancePortal;