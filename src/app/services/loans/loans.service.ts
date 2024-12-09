import { Injectable } from '@angular/core';
import { ILoan } from '../../models/ILoan';
import { IService } from '../../models/IService';
import { ServiceService } from '../services/services.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private serviceService: ServiceService) { }

  async getLoan(id: string): Promise<{ loan: ILoan; services: IService[] }> {
    const loans = await this.getAll();
    const el = loans.find(el=>el.loanId === id);
    if (el) {
      const services = await this.serviceService.getServices(el.loanId);
      return { loan: el, services };
    }
    throw new Error(id + 'Not Found');
  }

  getAll(): Promise<ILoan[]> {
    return Promise.resolve([
      {
        "loanId": "L001",
        "amount": 15000,
        "interestRate": 5.5,
        "term": 24,
        "startDate": new Date("2023-01-15"),
        "endDate": new Date("2025-01-15"),
        "nextPaymentDate": new Date("2024-12-22"),
        "status": "active",
        "customerId": "C001",
        "paymentFrequency": "monthly",
        "installmentAmount": 659.75,
        "remainingAmount": 9875.25,
        "type": "individual",
        "collateral": "Car - Toyota Corolla 2019",
        "notes": "Customer requested email reminders."
      },
      {
        "loanId": "L002",
        "amount": 5000,
        "interestRate": 7.2,
        "term": 12,
        "startDate": new Date("2023-06-01"),
        "endDate": new Date("2024-06-01"),
        "nextPaymentDate": new Date("2024-12-18"),
        "status": "active",
        "customerId": "C002",
        "paymentFrequency": "monthly",
        "installmentAmount": 442.33,
        "remainingAmount": 2653.98,
        "type": "group",
        "collateral": "None",
        "notes": "Two missed payments. Contact customer."
      },
      {
        "loanId": "L003",
        "amount": 15000,
        "interestRate": 5.5,
        "term": 24,
        "startDate": new Date("2023-01-15"),
        "endDate": new Date("2025-01-15"),
        "nextPaymentDate": new Date("2024-12-22"),
        "status": "paid",
        "customerId": "C001",
        "paymentFrequency": "monthly",
        "installmentAmount": 659.75,
        "remainingAmount": 9875.25,
        "type": "individual",
        "collateral": "Car - Toyota Corolla 2019",
        "notes": "Customer requested email reminders."
      },
      {
        "loanId": "L004",
        "amount": 5000,
        "interestRate": 7.2,
        "term": 12,
        "startDate": new Date("2023-06-01"),
        "endDate": new Date("2024-06-01"),
        "nextPaymentDate": new Date("2024-12-18"),
        "status": "paid",
        "customerId": "C002",
        "paymentFrequency": "monthly",
        "installmentAmount": 442.33,
        "remainingAmount": 2653.98,
        "type": "group",
        "collateral": "None",
        "notes": "Two missed payments. Contact customer."
      },
      {
        "loanId": "L005",
        "amount": 5000,
        "interestRate": 7.2,
        "term": 12,
        "startDate": new Date("2023-06-01"),
        "endDate": new Date("2024-06-01"),
        "nextPaymentDate": new Date("2024-12-18"),
        "status": "delinquent",
        "customerId": "C002",
        "paymentFrequency": "monthly",
        "installmentAmount": 442.33,
        "remainingAmount": 2653.98,
        "type": "group",
        "collateral": "None",
        "notes": "Two missed payments. Contact customer."
      }
    ]
    )
  }

  getActiveLoans(): Promise<ILoan[]> {
    return Promise.resolve([
      {
        "loanId": "L001",
        "amount": 15000,
        "interestRate": 5.5,
        "term": 24,
        "startDate": new Date("2023-01-15"),
        "endDate": new Date("2025-01-15"),
        "nextPaymentDate": new Date("2024-12-22"),
        "status": "active",
        "customerId": "C001",
        "paymentFrequency": "monthly",
        "installmentAmount": 659.75,
        "remainingAmount": 9875.25,
        "type": "individual",
        "collateral": "Car - Toyota Corolla 2019",
        "notes": "Customer requested email reminders."
      },
      {
        "loanId": "L002",
        "amount": 5000,
        "interestRate": 7.2,
        "term": 12,
        "startDate": new Date("2023-06-01"),
        "endDate": new Date("2024-06-01"),
        "nextPaymentDate": new Date("2024-12-18"),
        "status": "delinquent",
        "customerId": "C002",
        "paymentFrequency": "monthly",
        "installmentAmount": 442.33,
        "remainingAmount": 2653.98,
        "type": "group",
        "collateral": "None",
        "notes": "Two missed payments. Contact customer."
      }
    ]
    )
  }

}
