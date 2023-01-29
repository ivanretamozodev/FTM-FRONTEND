import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';
import { UploadsComponent } from './uploads/uploads.component';

@NgModule({
    declarations: [UploadsComponent],
    imports: [CommonModule, SharedModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
