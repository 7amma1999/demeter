import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { VidaOnlineRoutingModule } from './vida-online-routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    VidaOnlineRoutingModule
  ]
})
export class VidaOnlineModule { }
