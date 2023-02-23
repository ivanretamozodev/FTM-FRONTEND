import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { TokenInterceptor } from '@core/interceptors/token/spinner.interceptor';
import { SpinnerInterceptor } from '@core/interceptors/spinner/spinner.interceptor';
import { AppComponent } from './app.component';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler/error-handler.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
