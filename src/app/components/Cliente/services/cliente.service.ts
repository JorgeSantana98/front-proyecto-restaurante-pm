import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservacion } from 'src/app/interfaces/reservacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint
    this.myApiUrl = 'api/reservaciones/'
  }

  getListReservas(): Observable<Reservacion[]> {
    return this.http.get<Reservacion[]>(`${this.myAppUrl}${this.myApiUrl}`);
   } 
}
