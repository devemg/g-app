import { Component, Input } from '@angular/core';
import { ILoan } from '../../models/ILoan';
import { DatePipe, NgClass } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loan-card',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './loan-card.component.html',
  styleUrl: './loan-card.component.scss'
})
export class LoanCardComponent {
  @Input() loan?: ILoan;
  @Input() showDetails: boolean = false;
  @Input() showType: boolean = false;
  @Input() showNotes: boolean = false;
  @Input() showTitle: boolean = true;

  constructor(private router: Router) {}
  manageRedirection() {
    if (!this.loan) return;
    this.router.navigate(['loans', this.loan.loanId]);
  }
}
