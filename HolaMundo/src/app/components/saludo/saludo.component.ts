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

  myStyle: object = {
    color: 'yellow',
    fontSize: '30px',
    fontWeight: 'bold',
    background: 'black',
  };
  // nombre: string = 'Sheyla';

  constructor() {}

  ngOnInit(): void {
    // instrucciones previas a la renderizacion del componente
    console.log('ngOnInit del componente Saludo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges el componente recibe cambios');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy el componente va a desaparecer');
  }

  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre

  enviarMensajeAlPadre(): void {
    // alert(`Hola, ${this.nombre}. Alerta despachada desde un click de boton`);
    this.mensajeEmitter.emit(
      `Hola, ${this.nombre}. Alerta despachada desde un click de boton`
    );
  }
}

// Orden de ciclo de vida de los componentes:
//  1.* ngOnChanges ---> Modificacion del componente
//  2.* ngOnInit ---> Carga de datos
//  3.  ngAfterContentInit
//  4.  ngAfterContentChecked
//  5.  ngAfterViewInit
//  6.  ngAfterViewChecked
//  7.  ngAfterContentChecked
//  8.  ngAfterViewChecked
//  9.* ngOnDestroy ---> Destruccion del componente
