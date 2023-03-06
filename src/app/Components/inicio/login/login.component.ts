import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Models/usuario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuarioModel!: UsuarioModel;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  log(): void {
    const usuario: UsuarioModel = {
      nombreUsuario: this.loginForm.value.usuario,
      password: this.loginForm.value.password
    }
    this.loading = true;
    setTimeout(( )=> {
      if (usuario.nombreUsuario === 'fblanco' && usuario.password === 'Blanco123') {
        this.router.navigateByUrl('/dashboard')
      } else {
  
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
  
        Toast.fire({
          icon: 'error',
          title: 'Usuario o contraseña incorrectas'
        })
      }
      this.loading = false;
    }, 3000);
  
  }

  inicializarFormulario() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
