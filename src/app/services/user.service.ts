import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from "../interfaces/login";
import { Cliente } from "../interfaces/cliente";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

  signIn(user: Cliente): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  } //agregar backend para la tbl_clientes
  login(login: Login): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, login)
  }
}
