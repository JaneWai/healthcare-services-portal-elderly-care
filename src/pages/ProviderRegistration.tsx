import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, MapPin } from 'lucide-react';

const ProviderRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceTypes: {
      transportation: false,
      companion: false
    },
    name: '',
    contactNumber: '',
    email: '',
    availabilityDates: '',
    transportationCharge: '',
    companionCharge: '',
    coverageArea: ''
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      serviceTypes: {
        ...formData.serviceTypes,
        [name]: checked
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Provider Registration Form Data:', formData);
    // In a real application, you would send this data to your backend
    navigate('/success', { 
      state: { 
        message: 'Thank you for registering as a service provider!',
        details: 'We will review your information and contact you shortly.'
      } 
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-rose-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Service Provider Registration</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Type of Services
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="transportation"
                  name="transportation"
                  type="checkbox"
                  checked={formData.serviceTypes.transportation}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <label htmlFor="transportation" className="ml-3 text-gray-700">
                  Transportation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="companion"
                  name="companion"
                  type="checkbox"
                  checked={formData.serviceTypes.companion}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <label htmlFor="companion" className="ml-3 text-gray-700">
                  Companion in Hospital
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name of Service Provider
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <label htmlFor="availabilityDates" className="block text-sm font-medium text-gray-700">
                Availability with Dates and Times
              </label>
            </div>
            <textarea
              id="availabilityDates"
              name="availabilityDates"
              value={formData.availabilityDates}
              onChange={handleInputChange}
              required
              rows={3}
              placeholder="E.g., Monday-Friday: 9am-5pm, Weekends: 10am-2pm"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="transportationCharge" className="block text-sm font-medium text-gray-700">
                  Transportation Service Charge
                </label>
              </div>
              <input
                type="text"
                id="transportationCharge"
                name="transportationCharge"
                value={formData.transportationCharge}
                onChange={handleInputChange}
                placeholder="E.g., $30 per trip"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="companionCharge" className="block text-sm font-medium text-gray-700">
                  Companion Service Charge
                </label>
              </div>
              <input
                type="text"
                id="companionCharge"
                name="companionCharge"
                value={formData.companionCharge}
                onChange={handleInputChange}
                placeholder="E.g., $25 per hour"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-500 mr-2" />
              <label htmlFor="coverageArea" className="block text-sm font-medium text-gray-700">
                Services Coverage Area
              </label>
            </div>
            <textarea
              id="coverageArea"
              name="coverageArea"
              value={formData.coverageArea}
              onChange={handleInputChange}
              required
              rows={2}
              placeholder="E.g., Downtown Seattle, Bellevue, Redmond"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Register as Service Provider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderRegistration;
