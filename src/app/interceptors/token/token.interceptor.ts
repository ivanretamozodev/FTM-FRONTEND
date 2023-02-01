import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage/localstorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private _localStorageService: LocalstorageService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this._localStorageService.getToken();
        if (token) {
            const clone = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`),
            });
            return next.handle(clone);
        } else {
            return next.handle(request);
        }
    }
}
