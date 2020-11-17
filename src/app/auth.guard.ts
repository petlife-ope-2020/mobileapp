import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authenticated: boolean;

  constructor(private router: Router, private storage: Storage) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storage.get('isLoggedIn').then(value => {
      this.authenticated = value
      if (!this.authenticated) {
        this.router.navigate(['login'])
      }
      return this.authenticated;
    });
  };

}
