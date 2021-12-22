import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { DemoMaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ViewModule { }
