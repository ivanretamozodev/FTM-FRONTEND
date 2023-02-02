import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse, MovieSoftDetail } from '@interfaces/movies.interface';

@Injectable({
    providedIn: 'root',
})
export class PaginatorService {
    baseUrl: string = environment.baseUrl;
    movies$: BehaviorSubject<MovieSoftDetail[]> = new BehaviorSubject<MovieSoftDetail[]>([]);
    currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    totalPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    limit: number = 14;

    constructor(private http: HttpClient) {}
    /*
     * la funcion llama a el endpoint y le pasamos la pagina y el limite,esta retornara un observable de tipo MovieResponse,en el cual
     *con el operador map llenamos los observables con los datos en el cual usaremos con la suscripcion tanto en el componente moviesComponent y el paginatorComponent
     *en el caso de que venga el genero,se llama a su respectivo endpoint y seteamos la pagina a 1.
     */
    getAllMoviesPaginated(page: number | Observable<number>, limit: number, genre?: string) {
        if (genre) {
            page = 1;
            return this.http
                .get<MovieResponse>(`${this.baseUrl}/movies/genres?page=${page}&genre=${genre}&limit=${limit}`)
                .pipe(
                    map((movieRes: MovieResponse) => {
                        this.movies$.next(movieRes.movies);
                        this.currentPage$.next(movieRes.currentPage);
                        this.totalPage$.next(movieRes.totalPages);
                    })
                );
        }
        return this.http.get<MovieResponse>(`${this.baseUrl}/movies?page=${page}&limit=${limit}`).pipe(
            map((movieRes: MovieResponse) => {
                this.movies$.next(movieRes.movies);
                this.currentPage$.next(movieRes.currentPage);
                this.totalPage$.next(movieRes.totalPages);
            })
        );
    }

    nextPage() {
        if (this.currentPage$.value < this.totalPage$.value) {
            this.currentPage$.next(this.currentPage$.value + 1);
            this.getAllMoviesPaginated(this.currentPage$.value, this.limit).subscribe();
        }
        return;
    }

    previusPage() {
        if (this.currentPage$.value === 1) {
            return;
        }
        this.currentPage$.next(this.currentPage$.value - 1);
        this.getAllMoviesPaginated(this.currentPage$.value, this.limit).subscribe();
    }
}
