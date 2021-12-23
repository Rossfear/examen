import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { DemoMaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    InicioComponent,
    UsuarioComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DemoMaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ]
})
export class ViewModule { }
