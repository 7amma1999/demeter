import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { AccidentesPersonalesRoutingModule } from './accidentes-personales-routing.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    AccidentesPersonalesRoutingModule
  ]
})
export class AccidentesPersonalesModule { }
