import React, { useState } from 'react';

const Signup = ({ onNavigate, onSignup }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true
  });

  const handleSubmit = () => {
    if (formData.fullName && formData.phoneNumber && formData.email && formData.password) {
      onSignup(formData);
      onNavigate('login');
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? value === 'true' : value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 w-full max-w-sm sm:max-w-md max-h-screen overflow-y-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Create your<br />
            PopX account
          </h1>
        </div>
        
        <div className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Phone number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Email address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Password*
            </label>
            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 text-sm font-medium mb-3">Are you an Agency?*</p>
            <div className="flex space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors active:bg-purple-800 mt-6"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;