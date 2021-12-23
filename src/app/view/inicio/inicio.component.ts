import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IVendedor } from 'src/app/interfaces/vendedor';
import { IVenta } from 'src/app/interfaces/venta';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  //@Input() listaVentas: Array<IVenta> = [];

  listaVentas:       Array<IVenta> = [];
  listaVentasCopy:   Array<IVenta> = [];
  listaVendedores  : Array<IVendedor> = [];

  msjerror:         string;
  codMoneda:        string;
  msj:              string;

  constructor(
    private smante:      MantenimientoService,
    private spinner:     NgxSpinnerService,

  ) {
    this.codMoneda = 'PEN';
    this.msj = 'cargando registros';
   }

  ngOnInit(): void {
    this.spinner.show();
    this.getListaVentas();

  }

  getListaVentas() {

    this.smante.getvendedores().then( x => {

      this.listaVendedores = x;

      this.smante.getventas().then( v => {

        this.listaVentas = v;
        this.listaVentasCopy = v;
        this.spinner.hide();

      }, err => this.exeception(err));

    }, err => this.exeception(err));

  }

  cargarVentas(ven: string){

    this.listaVentasCopy = this.listaVentas.filter( v => v.vendedor === ven);
  }

  exeception( error: any ) {

    const e  = error.error ?? 'ocurrió un error';
    this.msjerror = e;
    this.spinner.hide();
  }

}
