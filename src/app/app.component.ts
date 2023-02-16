import { ChangeDetectorRef, Component, AfterContentChecked } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  constructor(public _spinnerService: SpinnerService, private cd: ChangeDetectorRef) {}
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
}
