import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-recepcionista',
  templateUrl: './master-recepcionista.component.html',
  styleUrls: ['./master-recepcionista.component.css'],
})
export class MasterRecepcionistaComponent {
  isSidebarClosed = false;
  arrows = Array.from({ length: 3 }, (_, i) => i);

  toggleMenu(arrowIndex: number) {
    // Implementa la lógica para mostrar/ocultar el menú para la flecha con el índice dado
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  constructor(private router: Router) {}
}
