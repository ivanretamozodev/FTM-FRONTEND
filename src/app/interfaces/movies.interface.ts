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
    backgroundImage: string;
    description: string;
    link: String;
    trailer: string;
    featured: boolean;
}
