import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  // creamos una lñiosta de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  // subscripcion de servicio
  subscription: Subscription | undefined;
  // Para hacer uso de un sewrvicio lo inyectamos enel constructor
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    // obtener la lista de contactos que nos brinda el sewrvicio
    this.contactoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.listaContactos = lista))
      .catch((error) =>
        console.error(
          `Ha habido un error al recuperar la lista de contactos: ${error}`
        )
      )
      .finally(() => console.log('Peticion de lista de contactos terminada'));
    console.table(this.listaContactos);
  }

  obtenerContacto(id: number) {
    this.subscription = this.contactoService
      .obtenerContactoPorID(id)
      ?.subscribe(
        (contacto: IContacto) => (this.contactoSeleccionado = contacto)
      );

    // ?.then((contacto: IContacto) => (this.contactoSeleccionado = contacto))
    // .catch((error) =>
    //   console.error(`Ha habido un error al recuperar el contacto: ${error}`)
    // )
    // .finally(() => console.log('Peticion de contacto por id terminada'));
    // console.log(`obtener info del contacto:${id}`);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
