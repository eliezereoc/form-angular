import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule, NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
