import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, MapPin, Stethoscope } from 'lucide-react';

const UserBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    patientContact: '',
    guardianName: '',
    guardianContact: '',
    serviceDate: '',
    serviceTime: '',
    hospitalName: '',
    doctorName: '',
    servicesRequired: {
      transportation: false,
      companion: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      servicesRequired: {
        ...formData.servicesRequired,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Booking Form Data:', formData);
    // In a real application, you would send this data to your backend
    navigate('/success', { 
      state: { 
        message: 'Your service has been booked successfully!',
        details: 'We will contact you shortly to confirm the details of your booking.'
      } 
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-rose-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Book Healthcare Services</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
              </div>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="patientContact" className="block text-sm font-medium text-gray-700">
                  Patient Contact Number
                </label>
              </div>
              <input
                type="tel"
                id="patientContact"
                name="patientContact"
                value={formData.patientContact}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">
                  Guardian Name
                </label>
              </div>
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="guardianContact" className="block text-sm font-medium text-gray-700">
                  Guardian Contact Number
                </label>
              </div>
              <input
                type="tel"
                id="guardianContact"
                name="guardianContact"
                value={formData.guardianContact}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700">
                  Date of Service
                </label>
              </div>
              <input
                type="date"
                id="serviceDate"
                name="serviceDate"
                value={formData.serviceDate}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="serviceTime" className="block text-sm font-medium text-gray-700">
                  Time of Service
                </label>
              </div>
              <input
                type="time"
                id="serviceTime"
                name="serviceTime"
                value={formData.serviceTime}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">
                  Hospital Name
                </label>
              </div>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <div className="flex items-center">
                <Stethoscope className="h-5 w-5 text-gray-500 mr-2" />
                <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">
                  Doctor Name
                </label>
              </div>
              <input
                type="text"
                id="doctorName"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services Required
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="transportation"
                  name="transportation"
                  type="checkbox"
                  checked={formData.servicesRequired.transportation}
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
                  checked={formData.servicesRequired.companion}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <label htmlFor="companion" className="ml-3 text-gray-700">
                  Companion in Hospital
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserBooking;
