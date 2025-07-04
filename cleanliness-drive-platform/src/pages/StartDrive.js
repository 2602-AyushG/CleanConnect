import React, { useState } from 'react';
import { 
  CloudArrowUpIcon, 
  MapPinIcon, 
  CalendarIcon, 
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import ReportIssueButton from '../components/ReportIssueButton';

const StartDrive = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    date: '',
    time: '',
    maxVolunteers: '',
    safetyInstructions: '',
    contactInfo: '',
    poster: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drive Form Submitted:', formData);
    
    // Show success message
    alert('Drive created successfully! You will be redirected to the drive status page.');
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      date: '',
      time: '',
      maxVolunteers: '',
      safetyInstructions: '',
      contactInfo: '',
      poster: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      poster: e.target.files[0]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-black text-black mb-4">
            Start a Cleanup Drive
          </h1>
          <p className="text-xl md:text-2xl text-blue-900 font-bold max-w-3xl mx-auto">
            Organize a community cleanup drive and make a positive impact on your local environment. Fill out the details below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Drive Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    Drive Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter a catchy title for your cleanup drive"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe what the cleanup drive is all about"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select cleanup category</option>
                    <option value="Beach">Beach Cleanup</option>
                    <option value="Park">Park Cleanup</option>
                    <option value="Street">Street Cleanup</option>
                    <option value="River">River/Lake Cleanup</option>
                    <option value="Community">Community Area</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter the cleanup location"
                  />
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Expected Volunteers */}
                <div>
                  <label htmlFor="maxVolunteers" className="block text-sm font-bold text-gray-700 mb-2 text-left">
                    Expected Volunteers
                  </label>
                  <input
                    type="number"
                    id="maxVolunteers"
                    name="maxVolunteers"
                    value={formData.maxVolunteers}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How many volunteers do you expect?"
                  />
                </div>

                {/* Drive Poster/Image */}
                <div>
                  <label htmlFor="poster" className="block text-sm font-medium text-gray-700 mb-2">
                    Drive Poster/Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-green-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="poster"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                        >
                          <span>Drop files here or click to upload</span>
                          <input
                            id="poster"
                            name="poster"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  {formData.poster && (
                    <p className="mt-2 text-sm text-green-600">
                      Selected: {formData.poster.name}
                    </p>
                  )}
                </div>

                {/* Safety Instructions */}
                <div>
                  <label htmlFor="safetyInstructions" className="block text-sm font-medium text-gray-700 mb-2">
                    Safety Instructions *
                  </label>
                  <textarea
                    id="safetyInstructions"
                    name="safetyInstructions"
                    required
                    rows={3}
                    value={formData.safetyInstructions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="List important safety guidelines for volunteers"
                  />
                </div>

                {/* Contact Information */}
                <div>
                  <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Information *
                  </label>
                  <textarea
                    id="contactInfo"
                    name="contactInfo"
                    required
                    rows={3}
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Provide contact details for volunteers"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-lg"
                  >
                    Create Cleanup Drive
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Info Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Make a Difference */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Make a Difference</h3>
              <p className="text-green-100 mb-4">
                Every cleanup initiative counts! Join our community-driven mission to create a cleaner, healthier environment.
              </p>
              <p className="text-green-100 text-sm">
                Start a new organized drive now.
              </p>
            </div>

            {/* Quick Tips */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
              <p className="text-gray-600 text-sm mb-4">
                A successful cleanup starts with good organization. Make sure to cover these basics:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Plan for adequate supplies (gloves, bags, water)</li>
                <li>• Coordinate with local authorities if needed</li>
                <li>• Share the drive on social media for better reach</li>
                <li>• Document the impact with before/after photos</li>
              </ul>
            </div>

            {/* Tips for Success */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips for Success</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Plan for adequate supplies (gloves, bags, water)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Coordinate with local authorities if needed
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Share the drive on social media for better reach
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Document the impact with before/after photos
                </li>
              </ul>
            </div>

            {/* Community Impact */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Impact</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2M kg</div>
                  <div className="text-sm text-gray-600">Waste Collected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15K+</div>
                  <div className="text-sm text-gray-600">Active Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Cities Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Report Issue Button */}
      <ReportIssueButton />
    </div>
  );
};

export default StartDrive; 
