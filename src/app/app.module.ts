
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ViewModule } from './view/view.module';


// import 'animate.css';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Angular Material
    DemoMaterialModule,
    // svg-icon
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
    // spinner
    NgxSpinnerModule,
    AppRoutingModule,
    // modulos
    AuthModule,
    ViewModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
