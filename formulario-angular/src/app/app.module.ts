import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaCadComponent } from './compartilhado/lista-cad/lista-cad.component';
import { FormCadComponent } from './compartilhado/form-cad/form-cad.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaCadComponent,
    FormCadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
