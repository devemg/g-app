import { Injectable } from '@angular/core';
import { IService } from '../../models/IService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getServices(loanId: string): Promise<IService[]> {
    return Promise.resolve([
      {
        "serviceId": "S004",
        "name": "Ecofiltro",
        "type": "other",
        "description": "Renovación de ecofiltro.",
        "price": 50,
        "status": "contracted",
        "nextPaymentDate": new Date()
      }
    ]);
  }

  getAll(): Promise<IService[]> {
    return Promise.resolve([
      {
        "serviceId": "S001",
        "name": "Seguro de vida",
        "type": "insurance-health",
        "description": "Cobertura de seguro de vida para familias y empleados.",
        "price": 1000,
        "status": "contracted",
        "nextPaymentDate": new Date("2024-12-20T00:00:00.000Z")
      },
      {
        "serviceId": "S002",
        "name": "Seguro de auto",
        "type": "insurance-car",
        "description": "Cobertura completa para vehículos en caso de accidente o robo.",
        "price": 800,
        "status": "contracted",
        "nextPaymentDate": new Date("2024-12-25T00:00:00.000Z")
      },
      {
        "serviceId": "S003",
        "name": "Servicio de telefonía móvil",
        "type": "phone",
        "description": "Planes de llamadas y datos móviles para uso personal y empresarial.",
        "price": 50,
        "status": "cancelled",
        "nextPaymentDate": new Date()
      },
      {
        "serviceId": "S004",
        "name": "Ecofiltro",
        "type": "other",
        "description": "Renovación de ecofiltro.",
        "price": 50,
        "status": "cancelled",
        "nextPaymentDate": new Date()
      },
      {
        "serviceId": "S005",
        "name": "Notificaciones SMS",
        "type": "other",
        "description": "Notificaciones SMS de movimientos",
        "price": 10,
        "status": "available",
        "nextPaymentDate": new Date()
      },
      {
        "serviceId": "S006",
        "name": "Notificaciones Email",
        "type": "other",
        "description": "Notificaciones email de movimientos",
        "price": 10,
        "status": "available",
        "nextPaymentDate": new Date()
      }
    ]
    )
  }

  getActiveServices(): Promise<IService[]> {
    return Promise.resolve([
      {
        "serviceId": "S001",
        "name": "Seguro de vida",
        "type": "insurance-health",
        "description": "Cobertura de seguro de vida para familias y empleados.",
        "price": 1000,
        "status": "contracted",
        "nextPaymentDate": new Date("2024-12-20T00:00:00.000Z")
      },
      {
        "serviceId": "S002",
        "name": "Seguro de auto",
        "type": "insurance-car",
        "description": "Cobertura completa para vehículos en caso de accidente o robo.",
        "price": 800,
        "status": "contracted",
        "nextPaymentDate": new Date("2024-12-25T00:00:00.000Z")
      },
    ]
    )
  }
}
