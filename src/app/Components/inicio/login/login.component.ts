import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuarioModel!: UsuarioModel;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  log(): void {
    const usuario : UsuarioModel = {
      nombreUsuario: this.loginForm.value.usuario,
      password: this.loginForm.value.password
    }

   if (usuario.nombreUsuario === 'fblanco' && usuario.password === 'Blanco123') {
    this.router.navigateByUrl('/dashboard')
   }else {
 
   }
  }

  inicializarFormulario() {
    this.loginForm = this.fb.group({
      usuario:['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
