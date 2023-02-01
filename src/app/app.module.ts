import { TokenInterceptor } from './interceptors/token/token.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner/spinner.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
