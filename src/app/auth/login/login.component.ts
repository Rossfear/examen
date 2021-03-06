import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  msj: string = null;

  constructor(
    private spinner:     NgxSpinnerService,

  ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() =>{
      this.spinner.hide();
    }, 2500)

  }

}
