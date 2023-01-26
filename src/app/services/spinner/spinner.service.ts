import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    showSpinner(): void {
        this.isLoading$.next(true);
    }
    hideSpinner(): void {
        this.isLoading$.next(false);
    }
}
