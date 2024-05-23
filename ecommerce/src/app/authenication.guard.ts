import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenicationGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)

  if(localStorage.getItem('user')){
      return true;
  }
  else{
    _router.navigate(['/'])
    return false;
  }
};
