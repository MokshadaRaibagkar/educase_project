import React, { useState } from 'react';

const Login = ({ onNavigate, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    return password.length >= 6; // At least 6 characters
  };

  // Get helper text for fields
  const getEmailHelper = () => {
    if (!touched.email && !formData.email) return 'Please enter your email address';
    if (formData.email && !validateEmail(formData.email)) return 'Please enter a valid email (e.g., user@example.com)';
    if (formData.email && validateEmail(formData.email)) return '✓ Valid email address';
    return '';
  };

  const getPasswordHelper = () => {
    if (!touched.password && !formData.password) return 'Password must be at least 6 characters';
    if (formData.password && formData.password.length < 6) return `Need ${6 - formData.password.length} more characters`;
    if (formData.password && validatePassword(formData.password)) return '✓ Password meets requirements';
    return '';
  };

  const handleSubmit = () => {
    const newErrors = {
      email: '',
      password: ''
    };

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    // If no errors, proceed with login
    if (!newErrors.email && !newErrors.password) {
      onLogin(formData);
      onNavigate('profile');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Mark field as touched when user starts typing
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true
      });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Check if form is valid for button styling
  const isFormValid = formData.email && formData.password && 
                      validateEmail(formData.email) && 
                      validatePassword(formData.password);

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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500' 
                  : formData.email && validateEmail(formData.email)
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-200 focus:ring-purple-500'
              }`}
            />
            <p className={`mt-1 text-sm ${
              formData.email && validateEmail(formData.email) 
                ? 'text-green-600' 
                : errors.email 
                  ? 'text-red-600'
                  : 'text-gray-500'
            }`}>
              {errors.email || getEmailHelper()}
            </p>
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                errors.password 
                  ? 'border-red-500 focus:ring-red-500' 
                  : formData.password && validatePassword(formData.password)
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-200 focus:ring-purple-500'
              }`}
            />
            <p className={`mt-1 text-sm ${
              formData.password && validatePassword(formData.password) 
                ? 'text-green-600' 
                : errors.password 
                  ? 'text-red-600'
                  : 'text-gray-500'
            }`}>
              {errors.password || getPasswordHelper()}
            </p>
          </div>
          
          <button
            onClick={handleSubmit}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              isFormValid
                ? 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white'
                : 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;