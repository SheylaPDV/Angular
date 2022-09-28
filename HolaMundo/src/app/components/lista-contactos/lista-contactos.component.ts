import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
})
export class ListaContactosComponent implements OnInit {
  // creamos una lñiosta de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  // Para hacer uso de un sewrvicio lo inyectamos enel constructor
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    // obtener la lista de contactos que nos brinda el sewrvicio
    this.contactoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.listaContactos = lista))
      .catch((error) =>
        alert(`Ha abido un error al recuperar la lista de contactos: ${error}`)
      )
      .finally(() => console.log('Peticion de lista de contactos terminada'));
    console.table(this.listaContactos);
  }

  obtenerContacto(id: number) {
    this.contactoSeleccionado = this.contactoService.obtenerContactoPorID(id);
    // console.log(`obtener info del contacto:${id}`);
  }
}
