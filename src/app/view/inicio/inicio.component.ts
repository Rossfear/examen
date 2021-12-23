import { Component, Input, OnInit } from '@angular/core';
import { IVenta } from 'src/app/interfaces/venta';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  @Input() listaVentas: Array<IVenta> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
