import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    MainComponent,
    BusquedaComponent,
    ResultadosComponent
  ], exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
