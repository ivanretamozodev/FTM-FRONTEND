import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { SmBannerComponent } from "./components/sm-banner/sm-banner.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@NgModule({
  declarations: [CardComponent, SmBannerComponent, SideBarComponent],
  imports: [CommonModule],
  exports: [CardComponent, SmBannerComponent, SideBarComponent],
})
export class SharedModule {}
