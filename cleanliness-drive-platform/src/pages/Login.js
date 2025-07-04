import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import ReportIssueButton from '../components/ReportIssueButton';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Handle login logic here
      console.log('Login attempt:', formData);
      alert('Login successful! (This is a demo)');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-body bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🧼 CleanDrive
          </h1>
          <h2 className="text-4xl md:text-5xl font-display font-black text-black">
            Ready to make a difference again?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to discover upcoming cleanup events and track your environmental impact.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`appearance-none block w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Sign in
              </button>
            </div>

            {/* Social login options */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>
          </form>

          {/* Sign up link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Visual Testimonials */}
      <div className="mt-8 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-base mr-4">
                S
              </div>
              <div>
                <p className="text-black font-bold text-base">Sarah M.</p>
                <p className="text-gray-700 text-sm font-bold">Beach Cleanup Organizer</p>
              </div>
            </div>
            <p className="text-black text-base font-bold italic">
              "CleanDrive helped me organize 12 beach cleanups this year. The platform makes coordination so easy!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-base mr-4">
                R
              </div>
              <div>
                <p className="text-black font-bold text-base">Rahul K.</p>
                <p className="text-gray-700 text-sm font-bold">Community Volunteer</p>
              </div>
            </div>
            <p className="text-black text-base font-bold italic">
              "Amazing community! I've met like-minded people and made real impact in my neighborhood."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-base mr-4">
                P
              </div>
              <div>
                <p className="text-black font-bold text-base">Priya S.</p>
                <p className="text-gray-700 text-sm font-bold">NGO Partnership Lead</p>
              </div>
            </div>
            <p className="text-black text-base font-bold italic">
              "The leaderboard feature motivates our team. We've increased participation by 300%!"
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="text-3xl font-bold text-black">2.5K+</div>
            <div className="text-sm text-gray-700 font-bold">Active Volunteers</div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="text-3xl font-bold text-black">180+</div>
            <div className="text-sm text-gray-700 font-bold">Cleanup Drives</div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="text-3xl font-bold text-black">95K kg</div>
            <div className="text-sm text-gray-700 font-bold">Waste Removed</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          By signing in, you agree to our{' '}
          <a href="#" className="text-green-600 hover:text-green-500">Terms of Service</a> and{' '}
          <a href="#" className="text-green-600 hover:text-green-500">Privacy Policy</a>
        </p>
      </div>
      
      {/* Report Issue Button */}
      <ReportIssueButton />
    </div>
  );
};

export default Login; 