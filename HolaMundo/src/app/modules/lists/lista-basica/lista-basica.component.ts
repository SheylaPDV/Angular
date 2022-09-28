import { Component, OnInit } from '@angular/core';

// creamos un tipo base para el ejemplo
export type Producto = {
  nombre: String;
  precio: number;
  descripcion: String;
};

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css'],
})
export class ListaBasicaComponent implements OnInit {
  listaElementos: Producto[] = [
    {
      nombre: 'leche',
      precio: 10,
      descripcion: 'Leche entera',
    },
    {
      nombre: 'Carne',
      precio: 20,
      descripcion: 'Carne de cerdo',
    },
  ];
  cargando: boolean = true;

  opcion: number = 0;

  constructor() {}

  ngOnInit(): void {}

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida; //El valor cambia, implica un cambio en los elementos renderizados
  }
}
