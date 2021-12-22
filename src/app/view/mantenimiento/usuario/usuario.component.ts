import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form: FormGroup;

  fechaActual = new Date();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
