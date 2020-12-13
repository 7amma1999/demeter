import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  pages = [
    {
      title: 'Accidentes personales',
      link: 'accidentes-personales'
    },
    {
      title: 'Proteccion Tarjetas',
      link: 'proteccion-tarjetas'
    },
    {
      title: 'Renta diaria por Hospitalizacion',
      link: 'renta-diaria-por-hospitalizacion'
    },
    {
      title: 'Bicicletas',
      link: 'bicicletas'
    },
    {
      title: 'Mascotas',
      link: 'mascotas'
    },
    {
      title: 'Vida Online',
      link: 'vida-online'
    }
  ];

  ngOnInit(): void {
  }

}
