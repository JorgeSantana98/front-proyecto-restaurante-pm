import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cliente',
  templateUrl: './admin-cliente.component.html',
  styleUrls: ['./admin-cliente.component.css'],
})
export class AdminClienteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
