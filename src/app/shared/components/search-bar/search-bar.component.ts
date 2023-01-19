import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
    loggedIn: boolean = false;

    constructor(private authService: AuthService) {
        this.authService.loggedIn$.subscribe((value) => (this.loggedIn = value));
    }

    logOut() {
        this.authService.logOut();
    }
}
