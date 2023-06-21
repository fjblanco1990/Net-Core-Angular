import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../inicio/services/login.service';
import { CuestionarioService } from '../services/cuestionario.service';
import { NotificacionesService } from 'src/app/Services/notificaciones.service';
import { CuestionarioModel } from 'src/app/Models/cuestionario.model';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.scss'],
  providers: [NotificacionesService]
})
export class CuestionariosComponent implements OnInit {
  nameUser: string = '';
  listCuestionarios: CuestionarioModel[] = [];
  loading: boolean = false;
  constructor(private _login: LoginService, private _cuestionarioService: CuestionarioService, 
    private _notificaService: NotificacionesService) { }

  ngOnInit(): void {
    var user = this._login.getTokenDecode();
    this.nameUser = user.sub;
    this.getCuestionarios();
  }

  getCuestionarios(): void {
    this.loading = true;
    this._cuestionarioService.getListCuestionarioByUser().subscribe(
      result => {
        this.listCuestionarios = result;
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      }
    )
  }

  deleteCuestionario(id: any): void {
    this._notificaService.confirmationNotBtnConfirm('¿ Desea eliminar este cuestionario ?','','Eliminar').then(eliminar => {
      if (eliminar) {
        this._cuestionarioService.deleteCuestionario(id).subscribe(
          result => {
            this._notificaService.Exitoso('El cuestionario se elimino con exito');
            this.getCuestionarios();
          }, error => {
            console.error(error);
          }
        )
      }
    })
   
  }

}
