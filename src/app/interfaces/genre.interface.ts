export interface Genre {
    _id: string;
    name: string;
}

export interface GenreResponse {
    length: number;
    genres: Genre[];
}
