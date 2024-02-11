import { CanActivateFn,Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const authToken = localStorage.getItem('userData')
  console.log("auth token:", authToken)
  if (authToken) {
    return true;
  } else {
    //this.router
    return false;
  }
};
