import { Injectable } from '@angular/core';
import { CuestionarioModel } from 'src/app/Models/cuestionario.model';
import { HttpServiceService } from 'src/app/Services/http-services.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario: string  = '';
  descripcionCuestionario: string  = '';
  constructor(private _http: HttpServiceService) { }

  guardarCuestionario(cuestionario: CuestionarioModel): Observable<any> {
    return this._http.post(`${environment.apiUrl}Cuestionario/CreateCuestionario`,JSON.stringify(cuestionario));
  }

  getListCuestionarioByUser(): Observable<any> {
    return this._http.get(`${environment.apiUrl}Cuestionario/GetListCuestionarioByUser`);
  }

  deleteCuestionario(idCuestionario: number): Observable<any> {
    return this._http.delet(`${environment.apiUrl}Cuestionario/${idCuestionario}`);
  }

  getCuestionarioById(id: number): Observable<any> {
    return this._http.get(`${environment.apiUrl}Cuestionario/${id}`);
  }

  getListCuestionarios(): Observable<any> {
    return this._http.get(`${environment.apiUrl}Cuestionario/GetListCuestionario`);
  }


}
