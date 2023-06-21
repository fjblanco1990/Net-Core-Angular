import { Injectable } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-services.service';
import { UsuarioModel } from '../../../Models/usuario.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpServiceService) { }

  Login(usuario: UsuarioModel): Observable<any> {
    return this._http.post(`${environment.apiUrl}Login/ValidateUser`, JSON.stringify(usuario));
  }

  setLocalStorage(data:any): void {
    localStorage.setItem('token', data.token);
  }
 
  getTokenDecode(): any {//sirve para decodificar el token
    const helper = new JwtHelperService();
    const decodeToken = helper.decodeToken(localStorage.getItem('token') || '');
    return decodeToken;
    // const expirationDate = helper.getTokenExpirationDate(token);
    // const isExpirate = helper.isTokenExpired(token)
  }

  removeLocalStorage():void {
    localStorage.removeItem('token');  
  }

}
