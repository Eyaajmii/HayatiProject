import { Personne } from "./personne";

export class Participant extends Personne{
    id!:number;
    AgeParticipant!:number;
    sexeParticipant!:string;
    maladieParticipant!:boolean;
    constructor(IdPersonne:number,Nompersonne:string,PrenomPersonne:string,
        NationnalitePersonne:string,AdressePersonne:string,TelPersonne:number,EmailPersonne:string,
        IdParticipant:number,AgeParticipant:number,sexeParticipant:string,maladieParticipant:boolean){
        super(IdPersonne,Nompersonne,PrenomPersonne,NationnalitePersonne,AdressePersonne,TelPersonne,EmailPersonne);
        this.id=IdParticipant;
        this.AgeParticipant=AgeParticipant;
        this.sexeParticipant=sexeParticipant;
        this.maladieParticipant=maladieParticipant;
    }
}
