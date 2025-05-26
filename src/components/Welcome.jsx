import React from 'react';

const Welcome = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('signup')}
            className="w-full !bg-indigo-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors active:bg-purple-800"
          >
            Create Account
          </button>
          
          <button
            onClick={() => onNavigate('login')}
            className="w-full !bg-purple-600 text-black py-3 px-4 rounded-lg font-medium hover:bg-purple-300 transition-colors "
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;