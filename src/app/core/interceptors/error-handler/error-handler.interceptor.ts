import { Router } from '@angular/router';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerInterceptor implements ErrorHandler {
  constructor(private _router: Router) {}
  handleError(error: any): void {
    this._router.navigate(['/404']);
  }
}
