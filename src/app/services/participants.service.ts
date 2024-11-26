import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../classes/participant';
import { HttpClient } from '@angular/common/http';
const url='http://localhost:3000/Participant'
@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  constructor(private http:HttpClient) { }
  getParticipant():Observable<Participant[]>{
    return this.http.get<Participant[]>(url);
  }
  RegistrationParticipant(p: Participant): Observable<Participant> {
    return this.http.post<Participant>(url, p);
  }
  removeParticipant(id:number){
    return this.http.delete<Participant>(url+'/'+id);
  }
}
