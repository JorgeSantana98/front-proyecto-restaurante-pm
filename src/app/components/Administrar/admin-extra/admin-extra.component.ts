import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-extra',
  templateUrl: './admin-extra.component.html',
  styleUrls: ['./admin-extra.component.css'],
})
export class AdminExtraComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
    };
  }
}
