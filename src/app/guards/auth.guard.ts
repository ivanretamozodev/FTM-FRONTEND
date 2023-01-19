import { Router } from '@angular/router';
import { LocalstorageService } from './../services/localstorage/localstorage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private locaStorage: LocalstorageService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const token = this.locaStorage.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode.role === 'ADMIN_ROLE' && !this.tokenExpired(tokenDecode.exp)) {
                return true;
            }
        } else {
            this.router.navigateByUrl('/home');
            return false;
        }
        return false;
    }

    tokenExpired(expiration: number): boolean {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
