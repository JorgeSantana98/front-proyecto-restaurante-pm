import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-identificacion',
  templateUrl: './admin-identificacion.component.html',
  styleUrls: ['./admin-identificacion.component.css'],
})
export class AdminIdentificacionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
