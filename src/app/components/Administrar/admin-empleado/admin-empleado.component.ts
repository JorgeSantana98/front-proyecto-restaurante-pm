import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-empleado',
  templateUrl: './admin-empleado.component.html',
  styleUrls: ['./admin-empleado.component.css'],
})
export class AdminEmpleadoComponent implements OnInit  {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
