import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://back-end-production-f28f.up.railway.app/auth/';
  URL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario)
 }
}
