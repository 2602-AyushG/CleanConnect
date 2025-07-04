import React, { useState, useEffect } from 'react';
import { TrophyIcon, StarIcon, MagnifyingGlassIcon, ChevronUpIcon, ChevronDownIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { leaderboardData } from '../data/mockData';
import LeaderboardTable from '../components/LeaderboardTable';

const Leaderboard = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [timeRange, setTimeRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cities = ['All Cities', ...new Set(leaderboardData.map(user => user.city))];

  const filteredData = leaderboardData.filter(user => {
    const matchesCity = !selectedCity || selectedCity === 'All Cities' || user.city === selectedCity;
    const matchesSearch = !searchQuery || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCity && matchesSearch;
  });

  const topThree = filteredData.slice(0, 3);

  const quickFilters = [
    { label: 'This Week', value: 'week', icon: '📅' },
    { label: 'This Month', value: 'month', icon: '🗓️' },
    { label: 'This Year', value: 'year', icon: '📆' },
    { label: 'All Time', value: 'all', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen py-8 font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="max-w-full mx-auto px-12 sm:px-16 lg:px-24 xl:px-32">
        
        {/* Enhanced Header with Gradient */}
        <div className="text-center mb-12 relative">
          <div className="relative">
                        <h1 className="text-4xl md:text-5xl font-display font-black text-black mb-4">
              <div className="inline-flex items-center justify-center w-18 h-18 md:w-20 md:h-20 bg-black rounded-full mr-5 shadow-lg">
                <TrophyIcon className="h-9 w-9 md:h-10 md:w-10 text-white" />
              </div>
              Leaderboard
            </h1>
            <p className="text-xl md:text-2xl text-blue-900 font-semibold mb-6">
              Celebrating our environmental heroes who are making a real difference in keeping our communities clean and green
            </p>
          </div>
        </div>



        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column - Leaderboard */}
          <div className="lg:col-span-3">
            {/* Search and Filter Section */}
            <div className="mb-6 flex gap-4">
              {/* Filter by City Dropdown */}
              <div className="relative flex-1">
                <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-12 pr-8 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white shadow-sm appearance-none cursor-pointer"
                >
                  <option value="">All Cities</option>
                  {cities.filter(city => city !== 'All Cities').map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Search by Name */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Enhanced Full Leaderboard Table */}
            <div className="bg-white shadow-xl overflow-hidden border border-gray-100 rounded-2xl">
              <div className="bg-black px-8 py-6">
                <h3 className="text-2xl font-display font-black text-white flex items-center">
                  <TrophyIcon className="h-6 w-6 mr-3" />
                  Complete Rankings
                  <span className="ml-4 bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm">
                    {filteredData.length} volunteers
                  </span>
                </h3>
              </div>
              <LeaderboardTable data={filteredData} />
            </div>
          </div>

          {/* Right Column - Stats and Points */}
          <div className="lg:col-span-1 space-y-3">
            {/* Enhanced Stats */}
            <div className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
              <h3 className="text-lg font-black text-black mb-3 text-center">Community Stats</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                    <div className="text-2xl font-black text-green-600 mb-1">2,847</div>
                    <div className="text-xs text-gray-700 font-semibold uppercase tracking-wider">Active Volunteers</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                    <div className="text-2xl font-black text-blue-600 mb-1">156</div>
                    <div className="text-xs text-gray-700 font-semibold uppercase tracking-wider">Cleanup Drives</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-3 border border-purple-100">
                    <div className="text-2xl font-black text-purple-600 mb-1">89.2K</div>
                    <div className="text-xs text-gray-700 font-semibold uppercase tracking-wider">Kg Waste Collected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* How Points Work */}
            <div className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
              <h3 className="text-lg font-black text-black mb-3 text-center">
                <StarIcon className="inline h-5 w-5 mr-2 text-black" />
                How Points Work
              </h3>
              <div className="space-y-2">
                <div className="text-center p-2 bg-gray-50 rounded-xl">
                  <div className="text-lg mb-1">👥</div>
                  <div className="font-bold text-xs text-black mb-1">Joining a Drive</div>
                  <div className="text-black font-bold text-sm">100 points</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-xl">
                  <div className="text-lg mb-1">📋</div>
                  <div className="font-bold text-xs text-black mb-1">Organizing a Drive</div>
                  <div className="text-black font-bold text-sm">500 points</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-xl">
                  <div className="text-lg mb-1">🎯</div>
                  <div className="font-bold text-xs text-black mb-1">Goal Completion</div>
                  <div className="text-black font-bold text-sm">+50% bonus</div>
                </div>
              </div>
            </div>

            {/* Monthly Challenge */}
            <div className="bg-black rounded-2xl p-4 text-white relative overflow-hidden">
              <h3 className="text-lg font-black text-white mb-3 text-center">Monthly Challenge</h3>
              <div className="relative z-10">
                <div className="text-center mb-3">
                  <div className="text-sm font-bold mb-1">🏆 July 2024: "Clean Seas Initiative"</div>
                  <div className="text-xs opacity-90">Goal: Clean 50 beaches nationwide</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xs">Progress</span>
                    <span className="font-bold text-xs">34/50 beaches</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <div className="text-center mt-2 text-xs">
                    <span className="font-bold">16 beaches to go!</span>
                  </div>
                  <div className="text-center text-xs mt-1 opacity-90">
                    Prize: Eco-friendly gadgets for top 10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Leaderboard; 
