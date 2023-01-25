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

export interface MovieResponse {
    success: boolean;
    results: AllMovies[];
}
export interface MovieDetailResponse {
    success: boolean;
    results: Movie;
}

export interface AllMovies {
    _id: string;
    posterImage: string;
}
