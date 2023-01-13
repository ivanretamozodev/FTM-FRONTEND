import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { DetailsPageComponent } from "./details-page/details-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [DetailsPageComponent, HomePageComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
