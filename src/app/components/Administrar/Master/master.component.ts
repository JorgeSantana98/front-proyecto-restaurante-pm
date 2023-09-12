import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent {
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
      this.router.navigate(['/adminclientes']);
    } else if (enlaceSeleccionado === 'enlace2') {
      this.router.navigate(['/adminempleado']);
    } else if (enlaceSeleccionado === 'enlace3') {
      this.router.navigate(['/adminproveedor']);
    } else if (enlaceSeleccionado === 'enlace4') {
      this.router.navigate(['/adminingrediente']);
    }
  }
}
