export interface Genre {
    id: string;
    name: string;
}

export interface GenreResponse {
    length: number;
    genres: Genre[];
}
