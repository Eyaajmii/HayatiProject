import { Personne } from "./personne";

export class ResponsableFournissur extends Personne {
    IdResponsableFrs!:number;
    constructor(IdPersonne:number,Nompersonne:string,PrenomPersonne:string,
        NationnalitePersonne:string,AdressePersonne:string,TelPersonne:number,EmailPersonne:string,
        IdResponsableFrs:number){
        super(IdPersonne,Nompersonne,PrenomPersonne,NationnalitePersonne,AdressePersonne,TelPersonne,EmailPersonne);
        this.IdResponsableFrs=IdResponsableFrs;
    }
}
