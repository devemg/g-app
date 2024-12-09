import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { LoanService } from '../../../services/loans/loans.service';
import { ILoan } from '../../../models/ILoan';
import { LoanCardComponent } from '../../../component/cards/loan-card/loan-card.component';
import { Location } from '@angular/common';
import { IService } from '../../../models/IService';
import { ServiceCardComponent } from '../../../component/cards/service-card/service-card.component';

@Component({
  selector: 'app-loan-detail',
  standalone: true,
  imports: [LoanCardComponent, RouterModule, ServiceCardComponent],
  templateUrl: './loan-detail.component.html',
  styleUrl: './loan-detail.component.scss'
})
export class LoanDetailComponent {
  loanId$ = this.activatedRoute.params.pipe(map((q) => q['id']));
  loanInfo?: ILoan;
  services: IService[] = [];
  pays: { number: number; amount: number; totalAmount: number; }[] = [];
  constructor(
    private activatedRoute: ActivatedRoute, 
    private loanService: LoanService,
    private router: Router,
    private location: Location
  ) {
    this.loanId$.subscribe((loanId) => {
        this.loanService.getLoan(loanId).then(({ loan, services })=> {
          this.loanInfo = loan;
          this.services = services;
          this.generatePayments(loan.remainingAmount, loan.installmentAmount);
        })
        .catch(()=> {
          this.router.navigateByUrl('/home');
        })
    });
  }

  goBack() {
    if (this.router.navigated) {
      this.location.back();
    }
  }

  private generatePayments(startAmount: number, qty: number) {
    let amount = startAmount;
    while (amount > 0) {
      if (amount - qty > 0) {
        amount = amount - qty;
        this.pays.push({
          number: this.pays.length + 1,
          amount: qty,
          totalAmount: amount, 
        });
      } else {
        const lastPay = amount;
        amount = 0;
        this.pays.push({
          number: this.pays.length + 1,
          amount: lastPay,
          totalAmount: amount, 
        });
      }
    }
  }
}
