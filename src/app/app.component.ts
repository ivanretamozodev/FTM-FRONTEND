import { Subject, tap } from 'rxjs';
import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage/localstorage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
