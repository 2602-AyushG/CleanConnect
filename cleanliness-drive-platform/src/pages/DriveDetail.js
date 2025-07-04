import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPinIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ShareIcon,
  PencilIcon,
  TrashIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { mockDrives } from '../data/mockData';

const DriveDetail = () => {
  const { id } = useParams();
  const drive = mockDrives.find(d => d.id === parseInt(id));
  const [hasJoined, setHasJoined] = useState(false);

  if (!drive) {
    return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Drive Not Found</h1>
          <p className="text-gray-600">The cleanup drive you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleJoinDrive = () => {
    setHasJoined(true);
    console.log('Joined drive:', drive.title);
    alert('Successfully joined the cleanup drive!');
  };

  const handleShareDrive = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Drive link copied to clipboard!');
  };

  const handleEditDrive = () => {
    console.log('Edit drive:', drive.id);
    alert('Edit functionality would be available for drive organizers.');
  };

  const handleCancelDrive = () => {
    if (window.confirm('Are you sure you want to cancel this drive?')) {
      console.log('Cancel drive:', drive.id);
      alert('Drive cancelled successfully.');
    }
  };

  return (
    <div className="min-h-screen py-8 font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Drive Image */}
          <div className="h-64 bg-green-200 relative">
            <img
              src={drive.poster}
              alt={drive.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                drive.status === 'Upcoming' 
                  ? 'bg-green-100 text-green-800'
                  : drive.status === 'Completed'
                  ? 'bg-black text-white'
                  : 'bg-green-50 text-green-900'
              }`}>
                {drive.status}
              </span>
            </div>
          </div>

          {/* Drive Info */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-display font-bold text-black">{drive.title}</h1>
              <div className="flex space-x-2">
                <button
                  onClick={handleShareDrive}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleEditDrive}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleCancelDrive}
                  className="p-2 text-danger-400 hover:text-danger-600 hover:bg-danger-50 rounded-lg transition-colors duration-200"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>{drive.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{new Date(drive.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>{drive.time}</span>
              </div>
            </div>

            <p className="text-black text-lg leading-relaxed mb-6">{drive.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {!hasJoined ? (
                <button
                  onClick={handleJoinDrive}
                  className="flex-1 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors duration-200 font-display text-lg"
                >
                  Join This Drive
                </button>
              ) : (
                <button
                  disabled
                  className="flex-1 bg-black text-white px-6 py-3 rounded-full font-display text-lg cursor-not-allowed"
                >
                  ✓ Joined
                </button>
              )}
              <button
                onClick={handleShareDrive}
                className="flex-1 border border-green-700 text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition-colors duration-200 font-display text-lg"
              >
                Share Drive
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-display font-semibold text-black mb-4">Drive Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-black mb-2">Category</h3>
                  <span className="inline-block bg-green-200 text-green-900 px-3 py-1 rounded-full text-sm">
                    {drive.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Organizer</h3>
                  <p className="text-green-900">{drive.organizer}</p>
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Distance from you</h3>
                  <p className="text-green-900">{drive.distance}</p>
                </div>
              </div>
            </div>

            {/* Safety Instructions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-display font-semibold text-black mb-4 flex items-center">
                <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-green-500" />
                Safety Instructions
              </h2>
              <p className="text-green-900">{drive.safetyInstructions}</p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-display font-semibold text-black mb-4">Contact Information</h2>
              <p className="text-green-900">{drive.contactInfo}</p>
            </div>

            {/* Sponsors */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-display font-semibold text-black mb-4">Sponsors & Support</h2>
              <div className="flex flex-wrap gap-2">
                {drive.sponsors.map((sponsor, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm"
                  >
                    {sponsor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Volunteers */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Volunteers ({drive.volunteers.length}/{drive.maxVolunteers})
              </h3>
              <div className="space-y-2 mb-4">
                {drive.volunteers.map((volunteer, index) => (
                  <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {volunteer.charAt(0)}
                    </div>
                    <span className="text-gray-700">{volunteer}</span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${(drive.volunteers.length / drive.maxVolunteers) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {drive.maxVolunteers - drive.volunteers.length} spots remaining
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  Get Directions
                </button>
                <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  Add to Calendar
                </button>
                <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  Contact Organizer
                </button>
                <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  Report Issue
                </button>
              </div>
            </div>

            {/* Share Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share This Drive</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Share on Facebook
                </button>
                <button className="w-full bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                  Share on Twitter
                </button>
                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveDetail; 
