import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { RentaHospitalizacionRoutingModule } from './renta-hospitalizacion-routing.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RentaHospitalizacionRoutingModule
  ]
})
export class RentaHospitalizacionModule { }
