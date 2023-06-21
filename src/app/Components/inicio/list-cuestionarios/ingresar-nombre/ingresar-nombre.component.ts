import { Component, OnInit } from '@angular/core';
import { RespuestaCuestionarioService } from '../../services/Respuesta-Cuestionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.scss']
})
export class IngresarNombreComponent implements OnInit {
  NombreParticipante: string = '';
  constructor(private router: Router, private respuestaCuestionarioService: RespuestaCuestionarioService) { }

  ngOnInit(): void {
    if (this.respuestaCuestionarioService.idCuestionario === 0 || this.respuestaCuestionarioService.idCuestionario === null) {
      this.router.navigate(['/inicio'])
    }
  }

  siguiente(): void {
    this.respuestaCuestionarioService.nombreParticipante = this.NombreParticipante;
    this.router.navigate(['/inicio/list-cuestionario/pregunta'])
  }

}
