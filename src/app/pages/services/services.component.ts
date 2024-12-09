import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { IService } from '../../models/IService';
import { ServiceCardComponent } from '../../component/cards/service-card/service-card.component';
import { ServiceService } from '../../services/services/services.service';

type FilterStatus = 'all' | 'contracted' | 'cancelled';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  filterStatus: FilterStatus = 'all';
  services: IService[] = [];
  filteredServices: IService[] = [];

  constructor(private serviceService: ServiceService) {
    this.serviceService.getAll().then((response)=> {
      this.services = response;
      this.applyFilters();
    })
    .catch(()=> {
      this.services = [];
    })
  }

  updateFilterStatus(value: FilterStatus) {
    this.filterStatus = value;
    this.applyFilters();
  }

  applyFilters() {
    if (this.filterStatus !== 'all') {
      this.filteredServices = this.services.filter((el)=>el.status === this.filterStatus);
    } else {
      this.filteredServices = this.services
    }
  }

}
