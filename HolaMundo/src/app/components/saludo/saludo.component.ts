// Controlador
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  @Input() nombre: string = 'Shey';
  // nombre: string = 'Sheyla';

  constructor() {}

  ngOnInit(): void {
    // instrucciones previas a la renderizacion del componente
    console.log('ngOnInit del componente Saludo');
  }

  // Ejemplo para gestionar un evento de tipo click en el DOM

  alertaSaludo(): void {
    alert(`Hola, ${this.nombre}. Alerta despachada desde un click de boton`);
  }
}
