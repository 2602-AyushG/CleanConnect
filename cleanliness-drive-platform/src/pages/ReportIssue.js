import React, { useState } from 'react';
import { ExclamationTriangleIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    urgency: 'medium',
    location: '',
    contact: '',
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Issue reported:', formData);
    alert('Your issue has been reported successfully! Our team will respond within 30 minutes for urgent matters.');
    
    // Reset form
    setFormData({
      subject: '',
      description: '',
      urgency: 'medium',
      location: '',
      contact: '',
      file: null
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
      file: e.target.files[0]
    }));
  };

  return (
    <div className="min-h-screen py-8 font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-200 p-4 rounded-full">
              <ExclamationTriangleIcon className="h-12 w-12 text-green-800" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-black mb-4">Report an Issue</h1>
          <p className="text-xl md:text-2xl text-blue-900 font-bold">
            Report environmental emergencies, safety concerns, or request immediate assistance
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-green-800 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">Emergency Response</h3>
              <p className="text-green-900">
                For life-threatening emergencies, please call <strong>emergency services (911)</strong> immediately. 
                This form is for environmental concerns and non-emergency assistance requests.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Urgency Level *
              </label>
              <select
                name="urgency"
                required
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
              >
                <option value="low">Low - General inquiry or suggestion</option>
                <option value="medium">Medium - Issue needs attention</option>
                <option value="high">High - Urgent environmental concern</option>
                <option value="critical">Critical - Immediate action required</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
                placeholder="Brief description of the issue"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
                placeholder="Where is the issue located?"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
                placeholder="Please provide as much detail as possible about the issue, including what happened, when it occurred, and any immediate risks..."
              />
            </div>

            {/* Contact Information */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Information *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
                placeholder="Phone number or email for immediate contact"
              />
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Supporting Evidence (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-green-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                    >
                      <span>Upload photos or documents</span>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>
              {formData.file && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {formData.file.name}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-3 rounded-full hover:bg-green-800 transition-colors duration-200 font-display text-lg"
              >
                Submit Issue
              </button>
            </div>
          </form>
        </div>

        {/* Response Time Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Response Times</h3>
          <div className="space-y-2 text-blue-700">
            <div className="flex justify-between">
              <span>Critical Issues:</span>
              <span className="font-medium">Within 30 minutes</span>
            </div>
            <div className="flex justify-between">
              <span>High Priority:</span>
              <span className="font-medium">Within 2 hours</span>
            </div>
            <div className="flex justify-between">
              <span>Medium Priority:</span>
              <span className="font-medium">Within 24 hours</span>
            </div>
            <div className="flex justify-between">
              <span>Low Priority:</span>
              <span className="font-medium">Within 3 business days</span>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-6 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-medium">Environmental Emergency:</h4>
              <p>1-800-ENV-HELP</p>
            </div>
            <div>
              <h4 className="font-medium">24/7 Support Line:</h4>
              <p>1-800-CLEANUP</p>
            </div>
            <div>
              <h4 className="font-medium">Local Authorities:</h4>
              <p>Check local environmental department</p>
            </div>
            <div>
              <h4 className="font-medium">Medical Emergency:</h4>
              <p>911 or local emergency services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue; 
