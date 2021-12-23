import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() mensaje: string = null;

  constructor(private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    /* setTimeout(() => {
      this.spinner.hide();
    }, 1200); */
  }

}
