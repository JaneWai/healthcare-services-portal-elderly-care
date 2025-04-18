export interface ServiceProvider {
  id?: string;
  serviceTypes: {
    transportation: boolean;
    companion: boolean;
  };
  name: string;
  contactNumber: string;
  email: string;
  availabilityDates: string;
  transportationCharge: string;
  companionCharge: string;
  coverageArea: string;
}

export interface ServiceBooking {
  id?: string;
  patientName: string;
  patientContact: string;
  guardianName: string;
  guardianContact: string;
  serviceDate: string;
  serviceTime: string;
  hospitalName: string;
  doctorName: string;
  servicesRequired: {
    transportation: boolean;
    companion: boolean;
  };
}
