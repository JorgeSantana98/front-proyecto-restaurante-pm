import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-servir',
  templateUrl: './orden-servir.component.html',
  styleUrls: ['./orden-servir.component.css'],
})
export class OrdenServirComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
