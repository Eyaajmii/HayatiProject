import { ResponsableFournissur } from "./responsable-fournissur";

export class Fournisseur {
    IdFournisseur!:number;
    NomFournisseur!:string;
    ResponsableFournisseur!:ResponsableFournissur;
    AdresseFournisseur!:string;
    EmailFournisseur!:string;
    FaxFournisseur!:number;
}
