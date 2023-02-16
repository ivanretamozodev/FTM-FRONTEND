export interface Genre {
  _id: string;
  name: string;
}

export interface GenreResponse {
  success: boolean;
  length: number;
  genres: Genre[];
}
