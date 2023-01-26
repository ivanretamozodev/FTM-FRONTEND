export interface Genre {
    id: string;
    name: string;
}
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
}
export interface MovieFeatured {
    _id: string;
    name: string;
    posterImage: string;
    description: string;
}
export interface MovieResponse {
    success: boolean;
    results: AllMovies[];
}
export interface MovieDetailResponse {
    success: boolean;
    results: Movie;
}

export interface MovieFeaturedResponse {
    success: boolean;
    results: MovieFeatured[];
}
export interface AllMovies {
    _id: string;
    posterImage: string;
}
