import React from 'react';

const Profile = ({ userInfo, loginInfo }) => {
  // Use signup info if available, otherwise fall back to login info
  const displayName = userInfo?.fullName || loginInfo?.email?.split('@')[0] || 'User';
  const displayEmail = userInfo?.email || loginInfo?.email || 'user@example.com';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Account Settings
        </h1>
        
        <div className="flex items-start space-x-4 mb-6">
          {/* Profile Avatar */}
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-semibold">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
              {displayName}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base truncate">
              {displayEmail}
            </p>
          </div>
        </div>
        
        {/* Bio/Description */}
        <div className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>

        {/* Additional User Info Display */}
        {userInfo && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-3 text-sm">
              {userInfo.phoneNumber && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone:</span>
                  <span className="text-gray-900">{userInfo.phoneNumber}</span>
                </div>
              )}
              {userInfo.companyName && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Company:</span>
                  <span className="text-gray-900">{userInfo.companyName}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-500">Account Type:</span>
                <span className="text-gray-900">
                  {userInfo.isAgency ? 'Agency' : 'Individual'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;