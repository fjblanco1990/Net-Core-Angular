
import { Injectable } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-services.service';
import { UsuarioModel } from '../../../Models/usuario.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpServiceService, private http: HttpClient) { }

  GuardarUsuario(usuario: UsuarioModel): Observable<any> {
    return this._http.post(`${environment.apiUrl}Usuarios/SaveUser`, JSON.stringify(usuario));
  }

  CambiarPassword(changePassword: any): Observable<any> {
    
    return this.http.put(`${environment.apiUrl}Usuarios/CambiarPassword`, changePassword)
  }


}
