import { Responsableplace } from "./responsableplace";

export class Places {
    Idplaces!:number;
    IntitulePlace!:string;
    AdressePlace!:string;
    ResponsablePlace!:Responsableplace;
    TelPlace!:number;
    FaxPlace!:number;
    EmailPlace!:string;
    constructor(Idplaces:number,IntitulePlace:string,AdressePlace:string,ResponsablePlace:Responsableplace,TelPlace:number,FaxPlace:number,EmailPlace:string){
        this.Idplaces=Idplaces;
        this.IntitulePlace=IntitulePlace;
        this.AdressePlace=AdressePlace;
        this.ResponsablePlace=ResponsablePlace;
        this.TelPlace=TelPlace;
        this.FaxPlace=FaxPlace;
        this.EmailPlace=EmailPlace;
    }
}
