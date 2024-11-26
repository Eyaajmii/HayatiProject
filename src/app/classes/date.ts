export class Date {
    IdDate!: number;
    DatePréci!: string;
    HeureDebut!: string;
    HeureFin!: string;

    constructor(IdDate: number, DatePréci: string, heureDebut: string, HeureFin: string) {
        this.IdDate = IdDate;
        this.DatePréci = DatePréci;
        this.HeureDebut = heureDebut;  
        this.HeureFin = HeureFin;
    }
}