import { Component, Input } from '@angular/core';
import { IService } from '../../../models/IService';
import { DatePipe, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [DatePipe, RouterModule, NgClass],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() service?: IService;
  @Input() showStatus: boolean = false;

  showPayButton = false;

  togglePayButton() {
    this.showPayButton = !this.showPayButton;
  }
}
