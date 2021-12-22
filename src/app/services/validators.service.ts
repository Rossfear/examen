
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  emptyData(forma: FormGroup) {

    return Object.values(forma.controls).forEach(control => {
      if (control instanceof FormGroup) {
        Object.values(control.controls).forEach(control => control.markAsTouched());
      }
      else {
        control.markAsTouched();
      }
    })
  }

  controlInvalid( dato: string, forma: FormGroup ){
    return forma.get(dato).invalid && forma.get(dato).touched;
  }

  validateKey(event: any, limite: number) : boolean {

    let oldval = event.target.value;
    const val = oldval.slice(0,event.target.selectionStart) + event.key + oldval.slice(event.target.selectionEnd);

    if( val.length > limite ) return false;
    return true;

  }

  passIguales( pass1:string, pass2:string ){

    return (formGroup : FormGroup)=>{

      const pass1control = formGroup.controls[pass1];
      const pass2control = formGroup.controls[pass2];

      if(pass1control.value === pass2control.value) pass2control.setErrors(null);
      else pass2control.setErrors({noEsIgual: true})
    }
  }
}
