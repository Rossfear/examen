import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { DemoMaterialModule } from '../material-module';



@NgModule({
  declarations: [
    InicioComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DemoMaterialModule
  ]
})
export class ViewModule { }
