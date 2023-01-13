import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { DetailsPageComponent } from "./details-page/details-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  declarations: [DetailsPageComponent, HomePageComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
