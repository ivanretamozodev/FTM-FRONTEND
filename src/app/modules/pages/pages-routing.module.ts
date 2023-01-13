import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsPageComponent } from "./details-page/details-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomePageComponent,
      },
      {
        path: "details/:id",
        component: DetailsPageComponent,
      },
      {
        path: "**",
        redirectTo: "home",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
