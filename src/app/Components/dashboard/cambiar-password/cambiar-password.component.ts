import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../inicio/services/login.service';
import { UsuarioService } from '../../inicio/services/usuario.service';
import { NotificacionesService } from '../../../Services/notificaciones.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss'],
  providers: [NotificacionesService]
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword!: FormGroup;
  loading: boolean = false;
  constructor(private _fb: FormBuilder, private _login: LoginService, private _usuario: UsuarioService, private _notificacion: NotificacionesService) {
    
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  guardarPassword(): void {
    this.loading = true;
      const user = this._login.getTokenDecode();
      const changePassword : any = {
        IdUsuario: +user.idUsuario,
        PasswordAnterior: this.cambiarPassword.value.passwordAnterior,
        NuevaPassword: this.cambiarPassword.value.nuevaPassword
      }
      this._usuario.CambiarPassword(changePassword).subscribe(
        result => {
          if (result.status) {
            this.cambiarPassword.reset();
            this.loading = false;
            this._notificacion.ExitosoGeneral(result.message);
          } else {
            this.loading = false;
            this._notificacion.Error(result.data.menssage);
          }
        }, error => {
          this._notificacion.Error('No se pudo realizar el cambio.');
        }
      )
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
