import { LocalstorageService } from './../../../services/localstorage/localstorage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-uploads',
    templateUrl: './uploads.component.html',
    styleUrls: ['./uploads.component.scss'],
})
export class UploadsComponent {
    constructor(private router: Router, private localStorage: LocalstorageService) {}
    logOut = () => {
        this.localStorage.removeToken();
        this.router.navigateByUrl('/');
    };
}
