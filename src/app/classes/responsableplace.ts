import { Personne } from "./personne";

export class Responsableplace extends Personne{
    IdResonsablePlace!:number;
    constructor(IdPersonne:number,Nompersonne:string,PrenomPersonne:string,
        NationnalitePersonne:string,AdressePersonne:string,TelPersonne:number,EmailPersonne:string,
        IdResonsablePlace:number){
        super(IdPersonne,Nompersonne,PrenomPersonne,NationnalitePersonne,AdressePersonne,TelPersonne,EmailPersonne);
        this.IdResonsablePlace=IdResonsablePlace;
       
    }
}
