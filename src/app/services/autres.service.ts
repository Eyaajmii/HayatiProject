import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Structure } from '../classes/structure';
import { Observable } from 'rxjs';
import { Fournisseur } from '../classes/fournisseur';
import { Organismes } from '../classes/organismes';
import { Places } from '../classes/places';
const urlStructure="http://localhost:3000/Structure";
const urlFournisseur=" http://localhost:3000/Fournisseur";
const urlOrganisme=" http://localhost:3000/Organismes"
const urlDate=" http://localhost:3000/Date"
const urlPlace=" http://localhost:3000/Place"
@Injectable({
  providedIn: 'root'
})
export class AutresService {

  constructor(private http:HttpClient) { }
  //structure
  getStructure():Observable<Structure[]>{
    return this.http.get<Structure[]>(urlStructure);
  }
  addStructure(s:Structure):Observable<Structure>{
    return this.http.post<Structure>(urlStructure,s);
  }
  //Fournisseur
  getFournisseur():Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(urlFournisseur);
  }
  addFournisseur(f:Fournisseur):Observable<Fournisseur>{
    return this.http.post<Fournisseur>(urlFournisseur,f);
  }
  //Oragnisme
  getOrganisme():Observable<Organismes[]>{
    return this.http.get<Organismes[]>(urlOrganisme);
  }
  addOrganisme(o:Organismes):Observable<Organismes>{
    return this.http.post<Organismes>(urlOrganisme,o);
  }
  //Date
  getDate():Observable<Date[]>{
    return this.http.get<Date[]>(urlDate);
  }
  addDate(d:Date):Observable<Date>{
    return this.http.post<Date>(urlDate,d);
  }
  //place
  getPlace():Observable<Places[]>{
    return this.http.get<Places[]>(urlPlace);
  }
  addPlace(p:Places):Observable<Places>{
    return this.http.post<Places>(urlPlace,p);
  }
}
