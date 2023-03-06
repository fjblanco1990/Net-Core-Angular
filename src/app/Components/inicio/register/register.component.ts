import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  // usuarioModel!: UsuarioModel;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  registar(): void {

    // const usuario : UsuarioModel = {
    //   nombreUsuario: this.loginForm.value.usuario,
    //   password: this.loginForm.value.password
    // }
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordRepeat.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  inicializarFormulario() {
    this.registerForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(4)],
      passwordRepeat: ['', Validators.required]
    }, { validator: this.checkPassword })
  }
}
