import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }

  convertFecha(fecha: string) {

    const dat = new Date(fecha);
    const dia = dat.getDate();
    const mes = dat.getMonth() + 1;
    const año = dat.getFullYear();

    if (mes < 10) fecha = `${año}-0${mes}-${dia}`;
    else fecha = `${año}-${mes}-${dia};`
    return fecha;
  }

  roundDecimal(numero : number, digitos : number ) : number {

    const base = Math.pow(10, digitos);
    const entero = Math.round(numero * base);
    const valor = (entero / base).toFixed( digitos );
    return Number(valor);
  }

}
