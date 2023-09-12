import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-mesero',
  templateUrl: './master-mesero.component.html',
  styleUrls: ['./master-mesero.component.css'],
})
export class MasterMeseroComponent {
  isSidebarClosed = false;
  arrows = Array.from({ length: 3 }, (_, i) => i);

  toggleMenu(arrowIndex: number) {
    // Implementa la lógica para mostrar/ocultar el menú para la flecha con el índice dado
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  constructor(private router: Router) {}

  /*navegarmenu() {
    this.router.navigate(['/menu']);
  }*/

  abrirNuevaVentana(event: any) {
    const enlaceSeleccionado = event.target.value;

    if (enlaceSeleccionado === 'enlace1') {
      this.router.navigate(['/meseroOrdenservir']);
    } else if (enlaceSeleccionado === 'enlace2') {
      this.router.navigate(['/meseroOrdenllevar']);
    }
  }
}
