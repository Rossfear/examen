import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { IVendedor } from 'src/app/interfaces/vendedor';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form: FormGroup;

  countndoc: number = 0;
  msjerror: string = null;

  fechaActual = new Date();

  //listaVendedores:   Array<IVendedor>  = [];
  listaVendedores : Array<IVendedor> = [];

  constructor(
    private fb:          FormBuilder,
    private svalidator:  ValidatorsService,
    private smante:      MantenimientoService,
    private spinner:     NgxSpinnerService,

  ) {
    this.createFormReg();
    this.countndoc = 0;

  }

  ngOnInit(): void {
    this.spinner.show();
    this.obtenerListaVendedores();
  }

  createFormReg() {
    this.form = this.fb.group({
      cliente         : [ '', [ Validators.required, Validators.minLength(3) ] ],
      numerodocumento : [ '', [ Validators.required, Validators.maxLength(11)] ],
      idvendedor      : [ 0 ],
      vendedor        : [ '', [ Validators.required]],
      idservicio      : [ 0 ],
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

  obtenerListaVendedores() {

    this.smante.getvendedores().then( x => {

      this.listaVendedores = x;
      console.log(this.listaVendedores);
      this.spinner.hide();

    }, err => this.exeception(err));

  }

  guardarCita() {
    if( this.form.invalid ){
      return this.svalidator.emptyData( this.form )
    }
  }

  exeception( error: any ) {

    const e  = error.error ?? 'ocurrió un error';
    this.msjerror = e;
    this.spinner.hide();
  }
}
