import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UploadsComponent } from './uploads/uploads.component';

@NgModule({
    declarations: [UploadsComponent],
    imports: [CommonModule, SharedModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
