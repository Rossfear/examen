import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule

  ],

  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
