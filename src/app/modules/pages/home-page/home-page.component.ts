import { Component } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from "swiper";
import { ViewEncapsulation } from "@angular/core";

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  config: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 15,
    navigation: true,
    breakpoints: {
      "540": {
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      "640": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "768": {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      "992": {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },
      "1200": {
        slidesPerView: 5.1,
        spaceBetween: 20,
      },
      "1400": {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    pagination: { clickable: true },
  };
  configFeatures: SwiperOptions = {
    slidesPerView: 0.85,
    spaceBetween: 15,
    navigation: true,
    breakpoints: {
      "540": {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      "576": {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      "768": {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      "992": {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      "1200": {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      "1400": {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },
    },
    pagination: { clickable: true },
  };
}
