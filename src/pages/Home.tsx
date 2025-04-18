import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, Clock, MapPin, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Healthcare Transportation & Companion Services for Seniors
              </h1>
              <p className="mt-4 text-lg text-rose-100">
                We connect elderly patients with reliable transportation and companion services for hospital visits.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/book-service"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-rose-50"
                >
                  Book a Service
                </Link>
                <Link
                  to="/provider-registration"
                  className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-rose-700"
                >
                  Become a Provider
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Elderly care"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We provide essential support for elderly patients needing to visit healthcare facilities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Car className="h-10 w-10 text-rose-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Transportation Services</h3>
                </div>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Safe and reliable transportation to and from medical appointments, with vehicles equipped to handle mobility aids and special needs.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500">•</span>
                    <span className="ml-2">Door-to-door service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500">•</span>
                    <span className="ml-2">Wheelchair accessible vehicles available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500">•</span>
                    <span className="ml-2">Experienced and vetted drivers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-10 w-10 text-rose-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Companion Services</h3>
                </div>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Caring companions who provide assistance during hospital visits, ensuring patients are comfortable and supported throughout their appointment.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500">•</span>
                    <span className="ml-2">Assistance with check-in and paperwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500">•</span>
                    <span className="ml-2">Note-taking during doctor consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-rose-500">•</span>
                    <span className="ml-2">Emotional support and companionship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Simple steps to get the care and support you need.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">1. Book a Service</h3>
              <p className="mt-2 text-gray-600">
                Fill out our simple booking form with your details and service requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-600">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">2. Get Matched</h3>
              <p className="mt-2 text-gray-600">
                We match you with a suitable service provider based on your location and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-600">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">3. Receive Care</h3>
              <p className="mt-2 text-gray-600">
                Your provider arrives on schedule to assist you with transportation and/or companionship.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
            >
              Book Your Service Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
