import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-llevar',
  templateUrl: './orden-llevar.component.html',
  styleUrls: ['./orden-llevar.component.css'],
})
export class OrdenLlevarComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
