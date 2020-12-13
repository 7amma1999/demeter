import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { BicicletasRoutingModule } from './bicicletas-routing.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    BicicletasRoutingModule
  ]
})
export class BicicletasModule { }
