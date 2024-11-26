import { Personne } from "./personne";
import { TacheResponsable } from "./tache-responsable";

export class Responsable extends Personne {
    IdResponsable!:number;
    TacheResponsable!:TacheResponsable;
    constructor(IdPersonne:number,Nompersonne:string,PrenomPersonne:string,
        NationnalitePersonne:string,AdressePersonne:string,TelPersonne:number,EmailPersonne:string,
        IdResponsable:number,TacheResponsable:TacheResponsable){
        super(IdPersonne,Nompersonne,PrenomPersonne,NationnalitePersonne,AdressePersonne,TelPersonne,EmailPersonne);
        this.IdResponsable=IdResponsable;
        this.TacheResponsable=TacheResponsable;
    }
}
