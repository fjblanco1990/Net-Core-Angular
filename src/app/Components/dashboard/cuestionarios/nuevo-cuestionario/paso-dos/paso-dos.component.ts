import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { PreguntaModel } from 'src/app/Models/pregunta.model';
import { NotificacionesService } from 'src/app/Services/notificaciones.service';
import { Router } from '@angular/router';
import { CuestionarioModel } from 'src/app/Models/cuestionario.model';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.scss'],
  providers: [NotificacionesService]
})
export class PasoDosComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  listPreguntas: PreguntaModel[] = [];
  loading: boolean = false;
  constructor(private _cuestionarioService: CuestionarioService, private _notificaService: NotificacionesService, private router: Router) { }

  ngOnInit(): void {
    this.titulo = this._cuestionarioService.tituloCuestionario;
    this.descripcion =  this._cuestionarioService.descripcionCuestionario;
  }

  GuardarPregunta(pregunta: PreguntaModel): void {
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
    
  } 

  EliminarPregunta(index: number): void  {
    this.listPreguntas.splice(index,1);
  }

  GuardarCuestionario(): void {
    this.loading = true;
    const cuestionario : CuestionarioModel = {
      Nombre: this.titulo,
      Descripcion: this.descripcion,
      listPreguntas: this.listPreguntas
    };
    this._cuestionarioService.guardarCuestionario(cuestionario).subscribe(
      result => {
         this._notificaService.Exitoso(result.message);
         this.router.navigate(['/dashboard']);
         this.loading = false;
      }, error => {
         this.router.navigate(['/dashboard']);
         this._notificaService.Error('Hubo un problema con el registro del formulario.');
         this.loading = false;
      }
    )

  }

}
