import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '@services/spinner/spinner.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    isLoading$!: Observable<boolean>;
    constructor(private _spinnerService: SpinnerService, private _cd: ChangeDetectorRef) {
        this.isLoading$ = this._spinnerService.isLoading$;
    }

    ngAfterViewInit(): void {
        this._cd.detectChanges();
    }
}
