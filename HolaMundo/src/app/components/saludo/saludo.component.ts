// Controlador
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
// (input) eventos de componentes padre a componentes hijo
// (output) eventos de componentes hijo a componentes padre

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() nombre: string = 'Shey';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  // nombre: string = 'Sheyla';

  constructor() {}

  ngOnInit(): void {
    // instrucciones previas a la renderizacion del componente
    console.log('ngOnInit del componente Saludo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre

  enviarMensajeAlPadre(): void {
    // alert(`Hola, ${this.nombre}. Alerta despachada desde un click de boton`);
    this.mensajeEmitter.emit(
      `Hola, ${this.nombre}. Alerta despachada desde un click de boton`
    );
  }
}
