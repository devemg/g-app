import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanDetailComponent } from './pages/loans/loan-detail/loan-detail.component';
import { LoansComponent } from './pages/loans/loans.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { hideNavbar: true }
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'loans',
        component: LoansComponent,
    },
    {
        path: 'loans/:id',
        component: LoanDetailComponent,
    },
    {
        path: 'services',
        component: ServicesComponent,
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];
