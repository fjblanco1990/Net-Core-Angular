import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Models/usuario.model';
import { NotificacionesService } from 'src/app/Services/notificaciones.service';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NotificacionesService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuarioModel!: UsuarioModel;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private _notificaciones: NotificacionesService, private _login: LoginService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  log(): void {
    const usuario: UsuarioModel = {
      nombreUsuario: this.loginForm.value.usuario,
      password: this.loginForm.value.password
    }
    this.loading = true;

    this._login.Login(usuario).subscribe(result => {

        this.router.navigateByUrl('/dashboard');
        this.loading = false;
        this._login.setLocalStorage(result);
      
    }, error => {
      this.loading = false;
      this._notificaciones.Error('Usuario o password incorrectas');
    });

  }


  inicializarFormulario() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
