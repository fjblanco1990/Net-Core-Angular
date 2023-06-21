import { Component, OnInit } from '@angular/core';
import { CuestionarioModel } from 'src/app/Models/cuestionario.model';
import { CuestionarioService } from '../../dashboard/services/cuestionario.service';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../services/Respuesta-Cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.scss']
})
export class ListCuestionariosComponent implements OnInit {
  loading = false;
  listCuestionarios: CuestionarioModel[] = [];

  constructor(private router: Router,private _cuestionarioService: CuestionarioService, private respuestaCuestionarioService: RespuestaCuestionarioService) { }

  ngOnInit(): void {
    this.getListCuestionarios();
  }

  getListCuestionarios() {
    this.loading = true;
    this._cuestionarioService.getListCuestionarios().subscribe(
      result =>  {
        this.loading = false;
        this.listCuestionarios = result;
      }
    )
  }

  ingresarNombre(idCuestionario: number) {
    this.respuestaCuestionarioService.idCuestionario = idCuestionario;
    this.router.navigate(['/inicio/list-cuestionario/ingresar-nombre']);
  }

}
