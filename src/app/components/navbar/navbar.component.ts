import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(200%)', opacity: 0}),
        animate('500ms ease', style({transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease', style({transform: 'translateX(200%)', opacity: 0}))
      ])
    ])
  ]
})
export class NavbarComponent {
  @Input() show = true;
  showSlideMenu: boolean = false;

  constructor(private router: Router) {

  }

  toggleSlideMenu() {
    this.showSlideMenu = !this.showSlideMenu;
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
    this.showSlideMenu = false;
  }

  manageClick(event: MouseEvent) {
    if (event.target && (event.target as HTMLElement).classList.contains('outside')) {
      this.showSlideMenu = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
    this.showSlideMenu = false;
  }
}
