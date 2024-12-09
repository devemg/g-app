import { NgClass, NgStyle } from '@angular/common';
import { LoanCardComponent } from '../../component/cards/loan-card/loan-card.component';
import { ILoan } from '../../models/ILoan';
import { LoanService } from './../../services/loans/loans.service';
import { Component } from '@angular/core';

type FilterStatus = 'all' | 'active' | 'cancelled';
type FilterType = 'group' | 'individual';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [LoanCardComponent, NgClass],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss'
})
export class LoansComponent {
  loans: ILoan[] = [];
  filteredLoans: ILoan[] = [];
  filterStatus: FilterStatus = 'all';
  filterType: FilterType = 'individual';
  constructor(private loanService: LoanService) {
    this.loanService.getAll().then((response)=>{
      this.loans = response;
      this.applyFilters();
    })
    .catch(()=>{
      this.loans = [];
    });
  }

  updateFilterStatus(value: FilterStatus) {
    this.filterStatus = value;
    this.applyFilters();
  }

  updateFilterType(value: FilterType) {
    this.filterType = value;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredLoans = this.loans.filter((el)=>el.type === this.filterType);
    if (this.filterStatus !== 'all') {
      if (this.filterStatus === 'active') {
        this.filteredLoans = this.filteredLoans.filter((el=> el.status === 'active' || el.status === 'delinquent'));
      } else {
        this.filteredLoans = this.filteredLoans.filter((el=> el.status === 'paid'));
      }
    }
  }
}
