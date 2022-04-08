import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  

      return this.checkCookieSesion()
  }

  checkCookieSesion():boolean{
    try {

      if(localStorage.getItem('token-inetum') != '7k81ardn37g'){
        this.router.navigate(['/','auth'])
        return false;
      }else {
        return true;
      }
    }catch (error) {
        this.router.navigate(['/','auth'])
        return false;
    }


  }
  
}
