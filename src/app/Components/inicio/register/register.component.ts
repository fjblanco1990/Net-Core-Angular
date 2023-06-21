import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Models/usuario.model';
import { NotificacionesService } from 'src/app/Services/notificaciones.service';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[ LoginService, NotificacionesService ]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  loading: boolean = false;
  // usuarioModel!: UsuarioModel;
  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private _notificaciones: NotificacionesService, private router: Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  registar(): void {
    this.loading = true;
    const usuario : UsuarioModel = {
      nombreUsuario: this.registerForm.value.usuario,
      password: this.registerForm.value.password
    }
    this._usuarioService.GuardarUsuario(usuario).subscribe( result => {
      this._notificaciones.Exitoso(result.data.nombreUsuario);
      this.registerForm.reset();
      this.loading = false;
      this.router.navigate(["/inicio/login"]);
    }, error => {
      this._notificaciones.Error(error.error.messaje);
      this.loading = false;
    })
   
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
