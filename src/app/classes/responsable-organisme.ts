import { Personne } from "./personne";
export class ResponsableOrganisme extends Personne {
    IdResponsableOrg!:number;
    constructor(IdPersonne:number,Nompersonne:string,PrenomPersonne:string,
        NationnalitePersonne:string,AdressePersonne:string,TelPersonne:number,EmailPersonne:string,
        IdResponsableOrg:number){
        super(IdPersonne,Nompersonne,PrenomPersonne,NationnalitePersonne,AdressePersonne,TelPersonne,EmailPersonne);
        this.IdResponsableOrg=IdResponsableOrg;
    }
}

