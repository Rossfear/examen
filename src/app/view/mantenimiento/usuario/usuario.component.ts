import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { IServicio } from 'src/app/interfaces/servicio';
import { IVendedor } from 'src/app/interfaces/vendedor';
import { IVenta } from 'src/app/interfaces/venta';
import { FuncionesService } from 'src/app/services/funciones.service';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form: FormGroup;

  codMoneda: string;
  precio: number = 0;
  countndoc: number = 0;
  msjerror: string = null;

  fechaActual: any = new Date();

  listaVendedores  : Array<IVendedor> = [];
  listaServicios   : Array<IServicio> = [];
  listaVentas      : Array<IVenta> = [];
  ventaActual      = {} as IVenta ;

  constructor(
    private fb:          FormBuilder,
    private sfn:         FuncionesService,
    private svalidator:  ValidatorsService,
    private smante:      MantenimientoService,
    private spinner:     NgxSpinnerService,

  ) {
    this.createFormReg();
    this.countndoc = 0;
    this.codMoneda = 'PEN';

  }

  ngOnInit(): void {
    this.spinner.show();
    this.obtenerListaVendedores();
  }

  createFormReg() {
    this.form = this.fb.group({
      cliente         : [ '', [ Validators.required, Validators.minLength(3) ] ],
      numerodocumento : [ '', [ Validators.required, Validators.maxLength(11)] ],
      vendedor        : [ '', [ Validators.required]],
      servicio        : [ '', [ Validators.required]],
      descuento       : [ '',  [ Validators.required]],
      fecha           : [this.fechaActual, [ Validators.required]]
    });
  }

  get nDocumentoInvalid() {
    return this.svalidator.controlInvalid('numerodocumento', this.form);
  }

  get clienteInvalid() {
    return this.svalidator.controlInvalid('cliente', this.form);
  }

  get vendedorInvalid() {
    return this.svalidator.controlInvalid('vendedor', this.form);
  }

  get servicioInvalid() {
    return this.svalidator.controlInvalid('servicio', this.form);
  }

  get descuentoInvalid() {
    return this.svalidator.controlInvalid('descuento', this.form);
  }

  async obtenerListaVendedores() {

    this.smante.getvendedores().then( x => {

      this.listaVendedores = x;

      this.smante.getservicios().then( s => {

        this.listaServicios = s;

        this.smante.getventas().then( v => {

          this.listaVentas = v;
          this.spinner.hide();

        }, err => this.exeception(err))

      }, err => this.exeception(err));

    }, err => this.exeception(err));

  }


  cambiarServicio(idServicio: number) {

    const ser = this.listaServicios.find( s => s.id === idServicio);
    this.precio = ser.precio;
  }

  guardarCita() {

    if( this.form.invalid ){
      return this.svalidator.emptyData( this.form )
    }


    const body = this.form.value;

    const id         = 'VEN-'+this.listaVentas.length + 1;
    const valorDesc  = Number(body.descuento) ?? 0;
    const descmonto  = this.precio / 100 * valorDesc;


    this.ventaActual.id           = id;
    this.ventaActual.fechaProg    = this.sfn.convertFecha(body.fecha)
    this.ventaActual.cliente      = body.cliente;
    this.ventaActual.idvendedor   = body.vendedor;

    this.ventaActual.totalDescuento = this.sfn.roundDecimal(descmonto, 4);
    this.ventaActual.totalVenta     = this.sfn.roundDecimal(this.precio - descmonto, 2);

    console.log(this.ventaActual);
  }

  exeception( error: any ) {

    const e  = error.error ?? 'ocurrió un error';
    this.msjerror = e;
    this.spinner.hide();
  }
}
