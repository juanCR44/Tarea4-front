import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarViviendaComponent } from './listar-vivienda/listar-vivienda.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListarViviendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
