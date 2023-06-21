import { Component, OnInit } from '@angular/core';
import { RespuestaCuestionarioService } from '../../services/Respuesta-Cuestionario.service';
import { CuestionarioService } from '../../../dashboard/services/cuestionario.service';
import { Router } from '@angular/router';
import { PreguntaModel } from 'src/app/Models/pregunta.model';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {
  idCuestionario: number = 0;
  listPreguntas: PreguntaModel[] = [];
  loading: boolean = false;
  rtaConfirmada: boolean = false;
  opcionSeleccionada: any;
  index: number = 0;
  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService, private cuestionarioService: CuestionarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    if (this.idCuestionario === 0 || this.idCuestionario === undefined) {
      this.router.navigate(['/inicio']);
      return;
    }
    this. getCuestionario();
  }

  getCuestionario(): void {
    this.loading = true;
    this.cuestionarioService.getCuestionarioById(this.idCuestionario).subscribe(
      result => {
          this.listPreguntas = result.listPreguntas;    
          this.loading = false;      
      }, error => {

      }
    )
  }

  obtenerPregunta(): string | undefined {
    return this.listPreguntas[this.index].descripcion;
  }

  getIndex(): number {
    return this.index;
  }

  respuestaSeleccionada(respuesta: any) : void {
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
  }

  addClassOption(respuesta: any): string {
    if (respuesta === this.opcionSeleccionada) {
      return 'active text-light';
    } else {
      return '';
    }
  }

  siguiente(): void {
    this.rtaConfirmada = false;
    this.index++;
  }
}
