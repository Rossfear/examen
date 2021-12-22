import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from '../core/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DemoMaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    // Angular Material
    DemoMaterialModule,
    // svg-icon
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
    // spinner
    NgxSpinnerModule,
    AppRoutingModule,
    RouterModule

  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
