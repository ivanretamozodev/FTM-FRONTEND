import { SpinnerService } from './services/spinner/spinner.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isLoading$ = this._spinnerService.isLoading$;
    constructor(private _spinnerService: SpinnerService) {}
}
