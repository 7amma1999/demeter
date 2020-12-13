import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { ProteccionTarjetasRoutingModule } from './proteccion-tarjetas-routing.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ProteccionTarjetasRoutingModule
  ]
})
export class ProteccionTarjetasModule { }
