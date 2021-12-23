import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,

  ],
  exports: [
    LoadingComponent,
  ]
})
export class CoreModule { }
