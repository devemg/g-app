import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  if (!!localStorage.getItem('userLogged')) {
     router.navigate(['/home']);
    return false;
  }
  return true;
};
