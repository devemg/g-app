import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanDetailComponent } from './pages/loans/loan-detail/loan-detail.component';
import { LoansComponent } from './pages/loans/loans.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ServicesComponent } from './pages/services/services.component';
import { authUserGuard } from './guards/auth-user.guard';
import { noAuthUserGuard } from './guards/no-auth-user.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { hideNavbar: true },
        canActivate: [ noAuthUserGuard ]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [ authUserGuard ]
    },
    {
        path: 'loans',
        component: LoansComponent,
        canActivate: [ authUserGuard ]
    },
    {
        path: 'loans/:id',
        component: LoanDetailComponent,
        canActivate: [ authUserGuard ]
    },
    {
        path: 'services',
        component: ServicesComponent,
        canActivate: [ authUserGuard ]
    },
    {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [ authUserGuard ]
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];
