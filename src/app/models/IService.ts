export interface IService {
    serviceId: string; // Unique identifier for the service
    name?: string; // Name of the service
    type: 'insurance-health' | 'insurance-car' | 'phone' | 'other';
    description: string; // Brief description of the service
    price: number; // Price of the service
    status: 'cancelled' | 'contracted'; // Status of the service (e.g., available, unavailable, contracted)
    nextPaymentDate: Date; // Date of the next scheduled payment, or null if no payment is scheduled
  }
  