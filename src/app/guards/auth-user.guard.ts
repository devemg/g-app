import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  if (!localStorage.getItem('userLogged')) {
     router.navigate(['/login']);
    return false;
  }
  return true;
};
