import { Component } from '@angular/core';
import { LoanService } from '../../services/loans/loans.service';
import { ILoan } from '../../models/ILoan';
import { LoanCardComponent } from '../../components/loan-card/loan-card.component';
import { ServiceService } from '../../services/services/services.service';
import { IService } from '../../models/IService';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoanCardComponent, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loans: ILoan[] = [];
  services: IService[] = [];

  constructor(private loanService: LoanService, private serviceService: ServiceService) {
    this.loanService.getActiveLoans().then(response=> {
      this.loans = response;
    })
    .catch(()=> {
      this.loans = [];
    });
    this.serviceService.getActiveServices().then(response=> {
      this.services = response;
    })
    .catch(()=> {
      this.services = [];
    });
  }
}
