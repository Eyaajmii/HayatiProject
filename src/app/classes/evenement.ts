
import { Date } from "./date";
export class Evenement {
    id!: number;
    NomEvent!: string;
    Description!: string;
    TypeEvent!: string;
    programmeEvent!: string;
    Compagnie!: string[];
    DateEvent!: Date;
    PlaceEvent!: string[];
    Fournisseur!:  string[];
    Organisme!: string[];

    constructor(id: number,
                NomEvent: string,
                Description: string,
                TypeEvent: string,
                programmeEvent: string,
                Compagnie: string[],
                DateEvent: Date,
                PlaceEvent: string[],
                Fournisseur: string[],
                Organisme: string[]) {
        this.id = id;
        this.NomEvent = NomEvent;
        this.Description = Description;
        this.TypeEvent = TypeEvent;
        this.programmeEvent = programmeEvent;  
        this.Compagnie = Compagnie;
        this.DateEvent = DateEvent;
        this.PlaceEvent = PlaceEvent;
        this.Fournisseur = Fournisseur;
        this.Organisme = Organisme;
    }
}