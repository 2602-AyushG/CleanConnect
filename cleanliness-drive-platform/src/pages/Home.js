import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { 
  MapPinIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { testimonials, partnerLogos, galleryImages } from '../data/mockData';
import GalleryCarousel from '../components/GalleryCarousel';
import TestimonialBlock from '../components/TestimonialBlock';
import NGOPartnersSection from '../components/NGOPartnersSection';
import ContactFooter from '../components/ContactFooter';
import ReportIssueButton from '../components/ReportIssueButton';

const Home = () => {
  return (
    <div className="min-h-screen font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      {/* Navigation/Header Space */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">

        
        <div className="relative pt-6 pb-10 min-h-screen flex flex-col justify-start">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              {/* GitHub Star Button */}
              <div className="flex justify-center mb-6 animate-bounce">
                <a
                  href="https://github.com"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <StarIcon className="h-4 w-4 mr-2 text-yellow-400" />
                  ✨ Star us on Github
                </a>
              </div>

              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-black leading-tight mb-4">
                  Streamline Your
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-black leading-tight">
                  Community Cleanup
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl text-black max-w-5xl mx-auto mb-8 leading-relaxed font-medium">
                Efficient drive organization, seamless volunteer coordination,
                and intelligent impact tracking for modern environmental initiatives.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  to="/start-drive"
                  className="group bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center"
                >
                  Start a Drive
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/drive-status"
                  className="group border-3 border-gray-800 bg-white text-gray-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center justify-center"
                >
                  Join Drives
                  <UserGroupIcon className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                <div className="flex items-center justify-center space-x-2 text-black">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="font-medium">Trusted by 500+ organizations</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-black">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="font-medium">15,000+ active volunteers</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-black">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="font-medium">2M kg waste collected</span>
                </div>
          </div>
          
              {/* Cleanup Drive Gallery */}
              <div className="mb-8">
                <div className="grid grid-cols-4 gap-4 w-full">
                  {/* Top Row */}
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Community beach cleanup"
                  />
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Volunteers cleaning park"
                  />
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="River cleanup volunteers"
                  />
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Community cleanup volunteers"
                  />
                  
                  {/* Bottom Row */}
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Volunteers cleaning environment"
                  />
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Park cleanup initiative"
                  />
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Coastal cleanup team"
                  />
                  <div 
                    className="hover:opacity-90 transition-all duration-300 aspect-square"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}
                    aria-label="Volunteers with trash bags"
                  />
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powerful Features Section */}
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-black mb-6">
              Our Powerful Features
            </h2>
            <p className="text-lg md:text-xl text-black max-w-4xl mx-auto">
              Everything you need to organize, manage, and scale your environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Drive Management */}
            <div className="group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-center">
              <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <UserGroupIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">
                Drive Management
              </h3>
              <p className="text-sm text-black leading-relaxed">
                Real-time tracking and optimization of cleanup drives
              </p>
            </div>

            {/* Location Visibility */}
            <div className="group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-center">
              <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">
                Location Visibility
              </h3>
              <p className="text-sm text-black leading-relaxed">
                End-to-end visibility with real-time mapping
              </p>
            </div>

            {/* Impact Forecasting */}
            <div className="group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-center">
              <div className="bg-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">
                Impact Forecasting
              </h3>
              <p className="text-sm text-black leading-relaxed">
                AI-powered prediction for optimal impact
              </p>
            </div>

            {/* Drive Tracking */}
            <div className="group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">
                Drive Tracking
              </h3>
              <p className="text-sm text-black leading-relaxed">
                Real-time updates on drive status
              </p>
            </div>

            {/* Safety Management */}
            <div className="group p-4 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">
                Safety Management
              </h3>
              <p className="text-sm text-black leading-relaxed">
                Ensure adherence to safety regulations
              </p>
            </div>

            {/* Automated Coordination */}
            <div className="group p-4 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <ArrowPathIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-black mb-2">
                Automated Coordination
              </h3>
              <p className="text-sm text-black leading-relaxed">
                Smart coordination with machine learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact in Numbers Section */}
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-black">
              See the difference we're making together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Drives Organized</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-700 font-medium">Active Volunteers</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Cities Covered</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-orange-600 mb-2">2M kg</div>
              <div className="text-gray-700 font-medium">Waste Collected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <ContactFooter />
      
      {/* Report Issue Button */}
      <ReportIssueButton />
    </div>
  );
};

export default Home; 
