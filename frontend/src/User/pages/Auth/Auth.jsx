import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import illustration from "../../../assets/home_ill.png"
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const url = isLogin
        ? 'http://localhost:3000/api/user/auth/login'
        : 'http://localhost:3000/api/user/auth/signup';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials:'include'
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Save token to local storage
        Swal.fire({
          icon: 'success',
          title: isLogin ? 'Login Successful!' : 'Signup Successful!',
          text: 'Redirecting to home...',
          timer: 1500,
          showConfirmButton: false
        });
        navigate('/'); // Redirect to the home route on success
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorData.message
        });
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.'
      });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full mt-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  id="username"
                  placeholder="John123"
                  value={formData.username}
                  onChange={handleChange}
                  required={!isLogin}
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className={`w-full py-3 mt-4 ${isLoading ? 'bg-gray-400' : 'bg-[#1a2226ff]'} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {isError && (
            <div className="mt-4 text-center text-red-600">
              Something went wrong. Please try again.
            </div>
          )}

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
