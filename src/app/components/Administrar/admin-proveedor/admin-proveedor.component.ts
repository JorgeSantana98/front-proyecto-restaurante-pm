import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-proveedor',
  templateUrl: './admin-proveedor.component.html',
  styleUrls: ['./admin-proveedor.component.css'],
})
export class AdminProveedorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
