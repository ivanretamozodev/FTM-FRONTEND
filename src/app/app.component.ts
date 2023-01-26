import { SpinnerService } from './services/spinner/spinner.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isLoading$!: Observable<boolean>;
    constructor(private _spinnerService: SpinnerService) {}
    ngOnInit(): void {
        this.isLoading$ = this._spinnerService.isLoading$;
    }
}
