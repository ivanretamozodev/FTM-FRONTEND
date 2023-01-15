import { AuthResponse } from "./../../interfaces/auth.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { catchError, map, of, tap } from "rxjs";
import { User } from "../../interfaces/auth.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  constructor(private http: HttpClient) {}

  get user(): User {
    return { ...this._user };
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((user) => {
        if (user.success) {
          this._user = { name: user.name!, id: user.id! };
        }
      }),
      map((res) => res.success),
      catchError((err) => of(false))
    );
  }

  register(email: string, password: string, name: string) {
    const url = `${this.baseUrl}/auth/register`;
    const body = { email, password, name };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((user) => {
        if (user.success) {
          this._user = { id: user.id, name: user.name };
        }
      }),
      map((res) => res.success),
      catchError((err) => of(false))
    );
  }
}
