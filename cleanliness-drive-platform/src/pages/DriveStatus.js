import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { mockDrives } from '../data/mockData';
import DriveCard from '../components/DriveCard';

const DriveStatus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['All', 'Beach', 'Park', 'Roadside', 'River', 'Urban', 'Forest'];
  const statuses = ['All', 'Upcoming', 'Completed', 'In Progress'];

  const filteredDrives = mockDrives
    .filter(drive => {
      const matchesSearch = drive.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           drive.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           drive.organizer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || drive.category === selectedCategory;
      const matchesStatus = selectedStatus === '' || selectedStatus === 'All' || drive.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        case 'volunteers':
          return a.volunteers.length - b.volunteers.length;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen py-8 font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Cleanup Drives</h1>
          <p className="text-2xl text-green-900 max-w-4xl mx-auto leading-relaxed font-bold">
            "Join thousands of passionate volunteers transforming communities one cleanup drive at a time."
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search drives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category === 'All' ? '' : category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
            >
              {statuses.map(status => (
                <option key={status} value={status === 'All' ? '' : status}>
                  {status}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
            >
              <option value="date">Sort by Date</option>
              <option value="distance">Sort by Distance</option>
              <option value="volunteers">Sort by Volunteers</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-2">
          <p className="text-green-900">
            Showing {filteredDrives.length} of {mockDrives.length} drives
          </p>
        </div>

        {/* Drives List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrives.map(drive => (
            <DriveCard key={drive.id} drive={drive} />
          ))}
        </div>

        {/* No Results */}
        {filteredDrives.length === 0 && (
          <div className="text-center py-12">
            <FunnelIcon className="mx-auto h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-lg font-display font-medium text-black mb-2">No drives found</h3>
            <p className="text-green-900">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Create Drive CTA */}
        <div className="mt-12 text-center">
          <div className="bg-black rounded-lg p-8 border border-gray-300">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Don't see a drive in your area?
            </h3>
            <p className="text-white mb-6">
              Start your own cleanup drive and make a difference in your community
            </p>
            <a
              href="/start-drive"
              className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-200 font-display text-lg"
            >
              Start a Drive
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveStatus; 
