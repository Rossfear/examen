import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IServicio } from '../interfaces/servicio';
import { IVendedor } from '../interfaces/vendedor';
import { IVenta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(
    private http      : HttpClient,
  ) { }


    /* NOTAS */

    getvendedores() {
      return this.http.get<IVendedor[]>('assets/json/vendedores.json').toPromise();
    }

    getservicios(){
      return this.http.get<IServicio[]>('assets/json/servicios.json').toPromise();
    }

    getventas(){
      return this.http.get<IVenta[]>('assets/json/ventas.json').toPromise();
    }
}
