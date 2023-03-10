import { Genre } from './genre.interface';

export interface Movie {
  name: string;
  year: string;
  genres: Array<Genre>;
  rating: Number;
  posterImage: string;
  description: string;
  trailer: string;
  featured: boolean;
  link: string;
  link4k: string;
}
export interface MovieFeatured {
  _id: string;
  name: string;
  posterImage: string;
  description: string;
  rating: number;
  featured: boolean;
}
export interface MovieResponse {
  success: boolean;
  currentPage: number;
  totalPages: number;
  movies: MovieSoftDetail[];
}
export interface MovieDetailResponse {
  success: boolean;
  results: Movie;
}

export interface MovieFeaturedResponse {
  success: boolean;
  results: MovieFeatured[];
}
export interface MovieSoftDetail {
  _id: string;
  posterImage: string;
  featured: boolean;
  link4k: string;
}
