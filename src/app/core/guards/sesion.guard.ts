import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class SesionGuard implements CanActivate {
  constructor(private localStorage: LocalstorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = this.localStorage.getToken();
    if (token) {
      this.router.navigateByUrl('/home');
      return false;
    } else {
      return true;
    }
  }
}
