import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword!: FormGroup;
  constructor(private _fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  guardarPassword(): void {

  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.nuevaPassword.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  inicializarFormulario() {
    this.cambiarPassword = this._fb.group( {
        passwordAnterior: ['', Validators.required],
        nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['']
    }, { validator: this.checkPassword })
  }

}
