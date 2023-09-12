import { Component, OnInit} from '@angular/core';
import { Plato } from 'src/app/Entidades/Plato';

@Component({
  selector: 'app-platomenu',
  templateUrl: './platomenu.component.html',
  styleUrls: ['./platomenu.component.css'],
})
export class PlatomenuComponent implements OnInit {
  //Configuracion para las tablas
  dtOptions: DataTables.Settings = {};
  

  ngOnInit() {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
      
    };
    
  }
  
  ListaPlato: Plato[] = [
  new Plato(1, "Arroz", "Seco de chivo", "Rico arroz con chivo", 2.5),
  new Plato(2, "Arroz", "Seco de chivo", "Rico arroz con chivo", 2.5),
  new Plato(3, "Arroz", "Seco de chivo", "Rico arroz con chivo", 2.5),
  new Plato(4, "Arroz", "Seco de chivo", "Rico arroz con chivo", 2.5),
  new Plato(5, "Arroz", "Seco de chivo", "Rico arroz con chivo", 2.5),
];

constructor(){
  
} 
}