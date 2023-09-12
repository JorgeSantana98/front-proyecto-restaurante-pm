import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Reservacion } from 'src/app/interfaces/reservacion';
@Component({
  selector: 'app-ver-reservas',
  templateUrl: './ver-reservas.component.html',
  styleUrls: ['./ver-reservas.component.css']
})
export class VerReservasComponent implements OnInit{
  
  listReservas: Reservacion[] = []

  constructor(private _clienteService: ClienteService){}

  ngOnInit(): void {
      this.getListReservaciones();
  }

  getListReservaciones() {
    // this.loading = true;

    this._clienteService.getListReservas().subscribe((data) => {
      console.log(data);
      this.listReservas = data;
      // this.loading = false;
    })
  }
}
