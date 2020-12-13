import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'accidentes-personales',
    loadChildren: () => import('./modules/accidentes-personales/accidentes-personales.module').then(m => m.AccidentesPersonalesModule)
  },
  {
    path: 'bicicletas',
    loadChildren: () => import('./modules/bicicletas/bicicletas.module').then(m => m.BicicletasModule)
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./modules/mascotas/mascotas.module').then(m => m.MascotasModule)
  },
  {
    path: 'proteccion-tarjetas',
    loadChildren: () => import('./modules/proteccion-tarjetas/proteccion-tarjetas.module').then(m => m.ProteccionTarjetasModule)
  },
  {
    path: 'renta-diaria-por-hospitalizacion',
    loadChildren: () => import('./modules/renta-hospitalizacion/renta-hospitalizacion.module').then(m => m.RentaHospitalizacionModule)
  },
  {
    path: 'vida-online',
    loadChildren: () => import('./modules/vida-online/vida-online.module').then(m => m.VidaOnlineModule)
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
