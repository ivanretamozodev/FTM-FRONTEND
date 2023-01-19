import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    feature: boolean = false;
    constructor(private authService: AuthService) {
        this.authService.isAdmin();
        this.authService.admin$.subscribe((res) => (this.feature = res));
    }
    ngOnInit() {}
}
