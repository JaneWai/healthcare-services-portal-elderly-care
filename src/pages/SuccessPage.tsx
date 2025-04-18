import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface LocationState {
  message: string;
  details: string;
}

const SuccessPage = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  const defaultMessage = "Your request has been processed successfully!";
  const defaultDetails = "Thank you for using our service.";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {state?.message || defaultMessage}
          </h1>
          <p className="mt-2 text-gray-600">
            {state?.details || defaultDetails}
          </p>
          
          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
