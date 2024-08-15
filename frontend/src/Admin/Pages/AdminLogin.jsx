import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/admin/adminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ admin_username: username, admin_password: password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: data.message,
        timer: 1000, // 1 seconds
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        // Redirect to /adminpanel after the alert disappears
        navigate('/adminpanel');
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
        timer: 3000, // 3 seconds
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="relative">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Username"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/forgetpassword"
                className="font-medium text-[#1a2226ff]"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-medium text-white bg-[#1a2226ff] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
