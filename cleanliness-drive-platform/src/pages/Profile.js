import React, { useState } from 'react';
import { 
  TrophyIcon, 
  MapPinIcon,
  EnvelopeIcon,
  UserCircleIcon,
  PhoneIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { userProfile } from '../data/mockData';

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [profileData, setProfileData] = useState(userProfile);
  const [editingField, setEditingField] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleEdit = (field) => {
    setEditingField(field);
    setEditValues({ ...editValues, [field]: profileData[field] || getFieldValue(field) });
  };

  const handleSave = (field) => {
    if (field === 'name') {
      setProfileData({ ...profileData, name: editValues[field] });
    } else if (field === 'gender') {
      setProfileData({ ...profileData, gender: editValues[field] });
    } else if (field === 'location') {
      setProfileData({ ...profileData, city: editValues[field] });
    } else if (field === 'birthday') {
      setProfileData({ ...profileData, birthday: editValues[field] });
    }
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValues({});
  };

  const getFieldValue = (field) => {
    switch (field) {
      case 'name': return profileData.name;
      case 'gender': return 'Male';
      case 'location': return 'India, NCT, Delhi';
      case 'birthday': return 'August 4, 2006';
      default: return '';
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData({ ...profileData, profileImage: e.target.result });
        setShowImageUpload(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    setShowImageUpload(true);
  };

  const cancelImageUpload = () => {
    setShowImageUpload(false);
  };

  return (
    <div className="min-h-screen py-8 font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-black text-black mb-4">
            My Profile
          </h1>
          <p className="text-xl md:text-2xl text-blue-900 font-bold">
            "Your environmental journey and achievements in building a cleaner, greener community"
          </p>
        </div>
        {/* Two Column Layout: Profile on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* Left Column - Profile Box */}
          <div className="lg:col-span-1">
            {/* Profile Info Box */}
            <div className="relative mb-2 h-full">
              {/* Background Pattern - More transparent and better blending */}
              <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl border border-white border-opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl"></div>
              
              {/* Profile Header Content */}
              <div className="relative px-8 py-16 h-full flex flex-col justify-between">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image - Increased size */}
                  <div className="relative mb-12">
                    <div 
                      className="w-56 h-56 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-6 border-white border-opacity-50 cursor-pointer hover:opacity-80 transition-opacity group mx-auto"
                      onClick={handleImageClick}
                    >
                      <img
                        src={profileData.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      {/* Edit overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-white text-sm font-medium text-center">
                          <div className="mb-2 text-2xl">📷</div>
                          <div>Edit Photo</div>
                        </div>
                      </div>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-green-500 rounded-full border-6 border-white shadow-xl"></div>
                    
                    {/* Image Upload Modal */}
                    {showImageUpload && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Update Profile Photo</h3>
                          <div className="space-y-4">
                            <label className="block">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                              />
                            </label>
                            <div className="flex space-x-3">
                              <button
                                onClick={cancelImageUpload}
                                className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-white mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">{profileData.name}</h1>
                    <p className="text-black text-2xl md:text-3xl mb-8 font-bold">{profileData.level}</p>
                    <p className="text-black leading-relaxed text-base md:text-lg font-bold">
                      Environmental enthusiast dedicated to creating cleaner communities through organized cleanup drives and sustainable initiatives.
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col w-full space-y-6">
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                      <PhoneIcon className="h-6 w-6" />
                      <span>Contact</span>
                    </button>
                    <button className="bg-blue-700 bg-opacity-50 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-opacity-70 transition-colors border-2 border-white border-opacity-30 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                      <EnvelopeIcon className="h-6 w-6" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
                
                {/* Spacer to push content to match height */}
                <div className="flex-1"></div>
              </div>
            </div>


          </div>

          {/* Right Column - All Other Content */}
          <div className="lg:col-span-3">
            {/* Single White Container for All Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Basic Info Section */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Info</h2>
                <div className="divide-y divide-gray-200">
                  <div className="flex items-center justify-between py-4">
                    <div className="text-gray-600 font-medium">Name</div>
                    <div className="flex items-center space-x-4 flex-1 justify-between ml-8">
                      {editingField === 'name' ? (
                        <div className="flex items-center space-x-2 flex-1">
                          <input
                            type="text"
                            value={editValues.name || ''}
                            onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button 
                            onClick={() => handleSave('name')}
                            className="text-green-600 hover:text-green-700 font-medium text-sm"
                          >
                            Save
                          </button>
                          <button 
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="text-black text-center text-lg font-medium">{profileData.name}</div>
                          <button 
                            onClick={() => handleEdit('name')}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-4">
                    <div className="text-gray-600 font-medium">Gender</div>
                    <div className="flex items-center space-x-4 flex-1 justify-between ml-8">
                      {editingField === 'gender' ? (
                        <div className="flex items-center space-x-2 flex-1">
                          <select
                            value={editValues.gender || ''}
                            onChange={(e) => setEditValues({ ...editValues, gender: e.target.value })}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          <button 
                            onClick={() => handleSave('gender')}
                            className="text-green-600 hover:text-green-700 font-medium text-sm"
                          >
                            Save
                          </button>
                          <button 
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="text-black text-center text-lg font-medium">{getFieldValue('gender')}</div>
                          <button 
                            onClick={() => handleEdit('gender')}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div className="text-gray-600 font-medium">Location</div>
                    <div className="flex items-center space-x-4 flex-1 justify-between ml-8">
                      {editingField === 'location' ? (
                        <div className="flex items-center space-x-2 flex-1">
                          <input
                            type="text"
                            value={editValues.location || ''}
                            onChange={(e) => setEditValues({ ...editValues, location: e.target.value })}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button 
                            onClick={() => handleSave('location')}
                            className="text-green-600 hover:text-green-700 font-medium text-sm"
                          >
                            Save
                          </button>
                          <button 
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="text-black text-center text-lg font-medium">{getFieldValue('location')}</div>
                          <button 
                            onClick={() => handleEdit('location')}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-4">
                    <div className="text-gray-600 font-medium">Birthday</div>
                    <div className="flex items-center space-x-4 flex-1 justify-between ml-8">
                      {editingField === 'birthday' ? (
                        <div className="flex items-center space-x-2 flex-1">
                          <input
                            type="date"
                            value={editValues.birthday || ''}
                            onChange={(e) => setEditValues({ ...editValues, birthday: e.target.value })}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button 
                            onClick={() => handleSave('birthday')}
                            className="text-green-600 hover:text-green-700 font-medium text-sm"
                          >
                            Save
                          </button>
                          <button 
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="text-black text-center text-lg font-medium">{getFieldValue('birthday')}</div>
                          <button 
                            onClick={() => handleEdit('birthday')}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Section 1: My Impact & Profile Statistics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* My Impact Cards */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">My Impact</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">Total Points</h3>
                        <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                          <TrophyIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.points}</div>
                      <p className="text-sm text-gray-600">points earned from environmental activities</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">Drives Joined</h3>
                        <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                          <UserCircleIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{profileData.drivesJoined}</div>
                      <p className="text-sm text-gray-600">cleanup drives completed successfully</p>
                    </div>
                  </div>
                </div>

                {/* Profile Statistics */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Statistics</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Drives Organized</span>
                      <span className="font-bold text-gray-900 text-lg">{profileData.drivesOrganized}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Total Points</span>
                      <span className="font-bold text-gray-900 text-lg">{profileData.points}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Member Since</span>
                      <span className="font-bold text-gray-900 text-lg">Jan 2024</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600 font-medium">Impact Level</span>
                      <span className="font-bold text-gray-900 text-lg">{profileData.level}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dividing Line */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Section 2: My Achievements & Redeemable Rewards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column Content */}
                <div className="space-y-6">
                  {/* Achievements Section */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">My Achievements</h2>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
                    </div>
                    
                    <div className="space-y-3">
                      {profileData.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl">{achievement.icon}</div>
                            <div>
                              <h3 className="font-bold text-gray-900">{achievement.name}</h3>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                          </div>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            Earned
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Environmental Goals */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Goals</h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-gray-900">Monthly Drive Target</h3>
                          <span className="text-sm font-medium text-gray-600">3/5 completed</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Organize 5 cleanup drives this month</p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-gray-900">Points Milestone</h3>
                          <span className="text-sm font-medium text-gray-600">1850/2000 pts</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '92.5%'}}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Reach 2000 points to unlock Eco Guardian badge</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Redeemable Rewards & Settings */}
                <div className="space-y-6">
                  {/* Redeemable Rewards */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Redeemable Rewards</h2>
                    <div className="space-y-3">
                      {profileData.coupons.map((coupon, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl p-4 hover:border-blue-300 transition-colors bg-white">
                          <h4 className="font-bold text-gray-900 mb-1 text-center">{coupon.name}</h4>
                          <p className="text-sm text-gray-600 mb-1 text-center">Code: {coupon.code}</p>
                          <p className="text-xs text-gray-500 mb-3 text-center">Expires: {coupon.expiry}</p>
                          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                            Redeem Now
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Settings */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                          <span className="font-bold text-gray-900">Notifications</span>
                          <p className="text-sm text-gray-500">Receive updates about new drives</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <span className="font-bold text-gray-900">Theme</span>
                          <p className="text-sm text-gray-500">Choose your preferred theme</p>
                        </div>
                        <select
                          value={theme}
                          onChange={(e) => setTheme(e.target.value)}
                          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                        >
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                          <option value="auto">Auto</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dividing Line */}
              <div className="border-t border-gray-200 my-8"></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
