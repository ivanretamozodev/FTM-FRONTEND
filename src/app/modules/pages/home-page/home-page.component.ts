import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { MovieFeatured, MovieSoftDetail } from '@interfaces/movies.interface';
import { MoviesService } from '@services/movies/movies.service';

SwiperCore.use([Autoplay, Pagination]);

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
    constructor(private _moviesService: MoviesService) {}
    movies: MovieSoftDetail[] = [];
    featuredMovies: MovieFeatured[] = [];
    valoratedMovies: MovieFeatured[] = [];

    ngOnInit(): void {
        this._moviesService.getMovies().subscribe((resp) => (this.movies = resp));
        this._moviesService.getFeaturedMovies().subscribe((resp) => (this.featuredMovies = resp));
        this._moviesService.getValoratedMovies().subscribe((resp) => (this.valoratedMovies = resp));
    }

    config: SwiperOptions = {
        slidesPerView: 1.9,
        spaceBetween: 5,
        navigation: true,
        breakpoints: {
            '540': {
                slidesPerView: 2.7,
                spaceBetween: 20,
            },
            '640': {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            '992': {
                slidesPerView: 3.7,
                spaceBetween: 20,
            },
            '1200': {
                slidesPerView: 5.1,
                spaceBetween: 20,
            },
            '1400': {
                slidesPerView: 7,
                spaceBetween: 20,
            },
        },
        pagination: { clickable: true },
    };
    configFeatures: SwiperOptions = {
        slidesPerView: 0.79,
        spaceBetween: 5,
        navigation: true,
        breakpoints: {
            '540': {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            '576': {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 1.7,
                spaceBetween: 20,
            },
            '992': {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            '1200': {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            '1400': {
                slidesPerView: 3.1,
                spaceBetween: 20,
            },
        },
        pagination: { clickable: true },
        autoplay: true,
    };
}
