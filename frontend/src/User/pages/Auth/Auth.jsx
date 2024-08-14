import React, { useState } from 'react';
import illustration from '../../../assets/home_ill.png'; // Replace with your illustration path

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  ">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden mt-[15vh]">
        
        {/* Illustration Card */}
        <div className="lg:w-1/2 bg-[#1a2226ff] p-10 flex items-center justify-center">
          <img src={illustration} alt="Illustration" className="w-3/4 h-3/4 object-contain" />
        </div>

        {/* Form Card */}
        <div className="lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>

          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full mt-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full mt-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="w-full mt-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                id="password"
                placeholder="********"
              />
            </div>

            <button
              className="w-full py-3 mt-4 bg-[#1a2226ff] text-white font-semibold rounded-lg shadow-md hover:from-blue-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200"
              type="submit"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                className="text-[#1a2226ff] font-semibold ml-1 hover:underline focus:outline-none transition duration-200"
                onClick={toggleForm}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
