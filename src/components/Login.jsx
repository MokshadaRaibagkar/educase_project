import React, { useState } from 'react';

const Login = ({ onNavigate, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      onLogin(formData);
      onNavigate('profile');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Signin to your<br />
            PopX account
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full !bg-gray-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-500 transition-colors active:bg-gray-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;