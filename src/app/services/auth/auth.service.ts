import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, of, tap, BehaviorSubject } from 'rxjs';
import { User } from '@interfaces/auth.interface';
import { AuthResponse } from '@interfaces/auth.interface';
import { LocalstorageService } from '@services/localstorage/localstorage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl: string = environment.baseUrl;
    private _user!: User;
    private admin = new BehaviorSubject<boolean>(false);
    private loggedIn = new BehaviorSubject<boolean>(false);

    admin$ = this.admin.asObservable();
    loggedIn$ = this.loggedIn.asObservable();

    constructor(private http: HttpClient, private localStorage: LocalstorageService) {
        this.isLogged();
        this.isAdmin();
    }

    /*
     *en la funcion de login preguntamos con el operador tap,preguntamos si la respuesta fue verdadera
     *en el caso de que lo sea,guardamos el token,le pasamos al observable el valor de logeado,
     *y preguntamos si tiene permisos de administrador.
     *y enviamos solo un valor booleano,si se produce un error,lo atrapamos con el catchError transformamos
     *a un observable y lo enviamos.
     */

    login(email: string, password: string) {
        const url = `${this.baseUrl}/auth/login`;
        const body = { email, password };
        return this.http.post<AuthResponse>(url, body).pipe(
            tap((user) => {
                if (user.success) {
                    this.localStorage.setToken(user.token);
                    this.loggedIn.next(true);
                    this.isAdmin();
                }
            }),
            map((res) => res.success),
            catchError((err) => of(false))
        );
    }
    /*
     *el registro funciona exactamente como la funcion de login,hacemos las validaciones y retornamos un valor
     *booleano.
     */
    register(email: string, password: string, name: string) {
        const url = `${this.baseUrl}/auth/register`;
        const body = { email, password, name };
        return this.http.post<AuthResponse>(url, body).pipe(
            tap((user) => {
                if (user.success) {
                    this.localStorage.setToken(user.token);
                    this.loggedIn.next(true);
                    this.isAdmin();
                }
            }),
            map((res) => res.success),
            catchError((err) => of(false))
        );
    }

    /*
     *funcion basica de logout,la cual remueve el jwt,le pasamos al obsevable isLogged false y
     *cerramos los permisos de administrador en el caso de que los tenga.
     */

    logOut() {
        this.localStorage.removeToken();
        this.loggedIn.next(false);
        this.admin.next(false);
    }

    /*
     * pregunta en el local storage si el usuario tiene los permisos nesesarios de administrador
     *y resuelve llenando el observable isAdmin dependiendo de la respuesta del localstorage
     */

    isAdmin() {
        const token = this.localStorage.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            tokenDecode.role === 'ADMIN_ROLE' ? this.admin.next(true) : this.admin.next(false);
        }
    }

    /*
     * pregunta en el local storage si existe un token,en el caso de tenerlo significaria que el usuario,
     *tiene una sesion activa,esta funcion devuelve los observables dependiendo del resultado de la consulta
     */

    isLogged() {
        this.localStorage.getToken() ? this.loggedIn.next(true) : this.loggedIn.next(false);
    }
}
