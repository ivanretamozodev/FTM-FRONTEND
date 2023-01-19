import { Router } from '@angular/router';
import { LocalstorageService } from './../services/localstorage/localstorage.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

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
