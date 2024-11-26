import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../classes/evenement';
const url = "http://localhost:3000/Evenement";

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  constructor(private http: HttpClient) { }
  getEvenement(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(url);
  }

  getEvenementById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${url}/${id}`);
  }
  addEvenment(e:Evenement):Observable<Evenement>{
    return this.http.post<Evenement>(url,e);
  }
  updateEvenementbyId(id:number, f:Evenement):Observable<Evenement>{
    return this.http.put<Evenement>(url+"/"+ id, f);
    }
    deleteEvenment(id:number){
      return this.http.delete(url+"/"+ id);
    }
}
