import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SmBannerComponent } from './components/sm-banner/sm-banner.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaxCharactersPipe } from './pipes/max-characters.pipe';

@NgModule({
  declarations: [
    CardComponent,
    SmBannerComponent,
    SideBarComponent,
    SearchBarComponent,
    FeaturedCardComponent,
    SpinnerComponent,
    MaxCharactersPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardComponent,
    SmBannerComponent,
    SearchBarComponent,
    SideBarComponent,
    FeaturedCardComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
