import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones-recepcionista',
  templateUrl: './reservaciones-recepcionista.component.html',
  styleUrls: ['./reservaciones-recepcionista.component.css'],
})
export class ReservacionesRecepcionistaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
