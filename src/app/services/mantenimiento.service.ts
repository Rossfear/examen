import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IServicio } from '../interfaces/servicio';
import { IVendedor } from '../interfaces/vendedor';

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

    getservicio(){
      return this.http.get<IServicio[]>('assets/json/servicios.json');
    }
}
