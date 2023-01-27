import { SpinnerService } from './services/spinner/spinner.service';
import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    isLoading$?: Observable<boolean>;
    constructor(private _spinnerService: SpinnerService, private _cd: ChangeDetectorRef) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.isLoading$ = this._spinnerService.isLoading$;
        this._cd.detectChanges();
    }
}
