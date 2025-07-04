import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ReportIssueButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/report-issue"
        className="group flex items-center px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
      >
        <ExclamationTriangleIcon className="h-5 w-5 mr-2 group-hover:animate-pulse" />
        <span className="font-semibold">Report Issue</span>
      </Link>
    </div>
  );
};

export default ReportIssueButton; 