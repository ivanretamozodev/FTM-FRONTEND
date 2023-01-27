import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NAVBAR_ITEMS } from 'src/app/mocks/searchbar.mock';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    navbarItems = NAVBAR_ITEMS;
    feature: boolean = false;
    constructor(private authService: AuthService) {
        this.authService.isAdmin();
        this.authService.admin$.subscribe((res) => (this.feature = res));
    }
    ngOnInit() {}
}
