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
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    // Angular Material
    DemoMaterialModule,
    // svg-icon
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
    // spinner

    AppRoutingModule,
    RouterModule

  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
