import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SmBannerComponent } from './components/sm-banner/sm-banner.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
    declarations: [
        CardComponent,
        SmBannerComponent,
        SideBarComponent,
        SearchBarComponent,
        FeaturedCardComponent,
        SpinnerComponent,
        PaginatorComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        CardComponent,
        SmBannerComponent,
        SideBarComponent,
        SearchBarComponent,
        FeaturedCardComponent,
        SpinnerComponent,
        PaginatorComponent,
    ],
})
export class SharedModule {}
