import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginGestionnaire } from '../classes/login-gestionnaire';
const urlLogin="  http://localhost:3000/loginGestionnaire"
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  auth=false;
  
  constructor(private http:HttpClient) { }
  public connecter(email: string, pwd: string):Observable<LoginGestionnaire[]> {
    return this.http.get<LoginGestionnaire[]>(`${urlLogin}/?email=${email}&&password=${pwd}`)
  }
  public isGestionnaire(): boolean {
    return this.auth;
  }

  public logout(): boolean {
    return this.auth=false;
  }
}
