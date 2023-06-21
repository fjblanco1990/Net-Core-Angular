import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuestionarioService } from '../../../services/cuestionario.service';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.scss']
})
export class PasoUnoComponent implements OnInit {
  datosCuestionario!: FormGroup;

  constructor(private _fb: FormBuilder, private router: Router, private _cuestionarioServices: CuestionarioService) { }

  ngOnInit(): void {
    this.InicializarFormulario();
  }

  PasoUno(): void {
    if (this.datosCuestionario.invalid) {
      this.datosCuestionario.markAllAsTouched();
    }
    this._cuestionarioServices.tituloCuestionario = this.datosCuestionario.controls.titulo.value;
    this._cuestionarioServices.descripcionCuestionario = this.datosCuestionario.controls.descripcion.value;
    this.router.navigate(['dashboard/nuevo-cuestionario/paso-dos'])
  }

  InicializarFormulario() {
    this.datosCuestionario = this._fb.group( {
      titulo: ['', Validators.required],
      descripcion: ['', [Validators.required]],
    })
  }

}
