
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgModule, LOCALE_ID } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ViewModule } from './view/view.module';

import { MAT_DATE_LOCALE } from '@angular/material/core'; // Calendario En español
import { registerLocaleData } from '@angular/common';

import LocaleEsPe from '@angular/common/locales/es-PE.js';

registerLocaleData(LocaleEsPe);


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

  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-PE'
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
