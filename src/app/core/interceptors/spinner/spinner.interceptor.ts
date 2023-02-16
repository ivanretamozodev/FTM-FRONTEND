import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private _spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._spinnerService.showSpinner();
    return next.handle(request).pipe(
      finalize(() => {
        this._spinnerService.hideSpinner();
      })
    );
  }
}
