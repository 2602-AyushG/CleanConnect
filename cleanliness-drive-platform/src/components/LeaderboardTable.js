import React from 'react';
import { MapPinIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { TrophyIcon, StarIcon, FireIcon } from '@heroicons/react/24/outline';

const LeaderboardTable = ({ data }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return null;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-900 border-l-4 border-yellow-400';
      case 2:
        return 'bg-gradient-to-r from-gray-50 to-slate-50 text-gray-900 border-l-4 border-gray-400';
      case 3:
        return 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-900 border-l-4 border-orange-400';
      default:
        return rank % 2 === 0 ? 'bg-gray-50' : 'bg-white';
    }
  };

  const getAchievementBadge = (rank, points) => {
    if (rank <= 3) {
      return { label: 'Elite Champion', color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white', icon: '🥇' };
    } else if (rank <= 10) {
      return { label: 'Star Performer', color: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white', icon: '⭐' };
    } else if (points >= 1000) {
      return { label: 'Green Warrior', color: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white', icon: '🛡️' };
    } else {
      return { label: 'Eco Supporter', color: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white', icon: '🌱' };
    }
  };

  const getPointsPercentage = (points) => {
    const maxPoints = Math.max(...data.map(user => user.points));
    return (points / maxPoints) * 100;
  };

  return (
    <div className="overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 sticky top-0 z-10">
            <tr>
              <th className="px-8 py-6 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                  <TrophyIcon className="h-5 w-5 mr-2" />
                  Rank
                </div>
              </th>
              <th className="px-8 py-6 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                Volunteer
              </th>
              <th className="px-8 py-6 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  Location
                </div>
              </th>
              <th className="px-8 py-6 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 mr-2" />
                  Points
                </div>
              </th>
              <th className="px-8 py-6 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                  <FireIcon className="h-5 w-5 mr-2" />
                  Achievement
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((user, index) => {
              const achievement = getAchievementBadge(user.rank, user.points);
              const pointsPercentage = getPointsPercentage(user.points);
              
              return (
                <tr 
                  key={user.rank} 
                  className={`hover:bg-green-50 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.01] ${getRankColor(user.rank)}`}
                >
                  {/* Rank */}
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRankIcon(user.rank) && (
                        <span className="text-3xl mr-3">{getRankIcon(user.rank)}</span>
                      )}
                      <div className={`text-2xl font-black ${user.rank <= 3 ? 'text-yellow-600' : 'text-gray-700'}`}>
                        #{user.rank}
                      </div>
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-14">
                        <div className={`h-14 w-14 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg ${
                          user.rank <= 3 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-600'
                        }`}>
                          {user.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-6">
                        <div className="text-lg font-black text-gray-900">
                          {user.name}
                        </div>
                        {user.rank <= 3 && (
                          <div className="text-xs text-yellow-600 font-bold mt-1">
                            🔥 Top Performer
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* City */}
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center text-lg font-bold text-gray-900">
                      <MapPinIcon className="h-5 w-5 mr-2 text-green-500" />
                      {user.city}
                    </div>
                  </td>

                  {/* Points */}
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="space-y-2">
                      <div className="text-xl font-black text-gray-900">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 font-bold">
                        points
                      </div>
                    </div>
                  </td>

                  {/* Achievement Badge */}
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className={`inline-flex items-center px-4 py-2 text-sm font-black rounded-full shadow-md ${achievement.color}`}>
                      <span className="mr-2">{achievement.icon}</span>
                      {achievement.label}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Enhanced Mobile View */}
      <div className="md:hidden space-y-4 p-4">
        {data.map((user) => {
          const achievement = getAchievementBadge(user.rank, user.points);
          const pointsPercentage = getPointsPercentage(user.points);
          
          return (
            <div key={user.rank} className={`p-6 rounded-2xl shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] ${getRankColor(user.rank)}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {getRankIcon(user.rank) && (
                    <span className="text-2xl mr-3">{getRankIcon(user.rank)}</span>
                  )}
                  <div>
                    <div className="text-xl font-black text-gray-900">
                      #{user.rank} {user.name}
                    </div>
                    <div className="text-sm text-gray-600 font-bold flex items-center mt-1">
                      <MapPinIcon className="h-4 w-4 mr-1 text-green-500" />
                      {user.city}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-gray-900">{user.points.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 font-bold">points</div>
                </div>
              </div>
              
              
              {/* Mobile Achievement */}
              <div className="flex items-center justify-between">
                <div className={`inline-flex items-center px-3 py-1 text-xs font-black rounded-full ${achievement.color}`}>
                  <span className="mr-1">{achievement.icon}</span>
                  {achievement.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardTable; 
