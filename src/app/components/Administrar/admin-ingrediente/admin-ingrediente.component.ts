import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ingrediente',
  templateUrl: './admin-ingrediente.component.html',
  styleUrls: ['./admin-ingrediente.component.css'],
})
export class AdminIngredienteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
