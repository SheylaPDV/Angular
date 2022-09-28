import { Injectable } from '@angular/core';
// importamos lña lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}
  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }
  obtenerContactoPorID(id: number): IContacto | undefined {
    // buscamos el contacto por id dentro de la lisya de contactos mockeados
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );
    if (contacto) {
      return contacto;
    } else {
      return;
    }
  }
}
