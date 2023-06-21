import { Injectable } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-services.service';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { CuestionarioModel } from 'src/app/Models/cuestionario.model';
import { RespuestaCuestionarioModel } from 'src/app/Models/respuesta-cuestionario.model';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  
  nombreParticipante: string  = '';
  idCuestionario: number = 0;
  respuestas: number[] = [];
  cuestionario!: CuestionarioModel;

  constructor(private _http: HttpServiceService) { }

  GuardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionarioModel): Observable<any> {
    return this._http.post(`${environment.apiUrl}RespuestaCuestionario/SaveRespuestaCuestionario`, JSON.stringify(respuestaCuestionario));
  }



}