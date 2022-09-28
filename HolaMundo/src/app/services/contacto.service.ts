import { Injectable } from '@angular/core';
// importamos lña lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';
// inyectamos observables de rxjs
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}
  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }
  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {
    // buscamos el contacto por id dentro de la lisya de contactos mockeados
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    // creamos un observable
    let observable: Observable<IContacto> = new Observable((observer) => {
      observer.next(contacto); //emitir un valor a todo componente suscrito
      observer.complete(); //no emitimos mas valores
    });
    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
