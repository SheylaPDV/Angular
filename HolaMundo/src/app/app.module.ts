import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
// Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [AppComponent, SaludoComponent, ListaContactosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    /*Importamos modulo personalizado*/ ListsModule,
    // importamos modulo HttpClientModule para hacer petiociones HTTP
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
