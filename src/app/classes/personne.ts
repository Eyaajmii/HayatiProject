export class Personne {
    IdPersonne!:number;
    NomPersonne!:string;
    PrenomPersonne!:string;
    NationnalitePersonne!:string;
    AdressePersonne!:string;
    TelPersonne!:number;
    EmailPersonne!:string;
    constructor(IdPersonne:number,Nompersonne:string,PrenomPersonne:string,
        NationnalitePersonne:string,AdressePersonne:string,TelPersonne:number,EmailPersonne:string){
            this.IdPersonne=IdPersonne;
            this.NomPersonne=Nompersonne;
            this.PrenomPersonne=PrenomPersonne;
            this.NationnalitePersonne=NationnalitePersonne;
            this.AdressePersonne=AdressePersonne;
            this.TelPersonne=TelPersonne;
            this.EmailPersonne=EmailPersonne
        }
}
