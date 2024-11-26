import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/classes/evenement';
import { Fournisseur } from 'src/app/classes/fournisseur';
import { Organismes } from 'src/app/classes/organismes';
import { Places } from 'src/app/classes/places';
import { Structure } from 'src/app/classes/structure';
import { AutresService } from 'src/app/services/autres.service';
import { EvenementsService } from 'src/app/services/evenements.service';

@Component({
  selector: 'app-consult-event',
  templateUrl: './consult-event.component.html',
  styleUrls: ['./consult-event.component.css']
})
export class ConsultEventComponent implements OnInit {
  lesEvenements:Evenement[]=[];
  lesStructures:Structure[]=[];
  lesFournisseurs:Fournisseur[]=[];
  lesDates:Date[]=[];
  lesPlaces:Places[]=[];
  lesOragnismes:Organismes[]=[];
constructor(private serviceEvent:EvenementsService,private serviceAutre:AutresService){}
  ngOnInit(): void {
    this.serviceEvent.getEvenement().subscribe(data=>this.lesEvenements=data);
   /* this.serviceAutre.getStructure().subscribe(data=>this.lesStructures=data);
    this.serviceAutre.getFournisseur().subscribe(data=>this.lesFournisseurs=data);
    this.serviceAutre.getOrganisme().subscribe(data=>this.lesOragnismes=data);
    this.serviceAutre.getDate().subscribe(data=>this.lesDates=data);
    this.serviceAutre.getPlace().subscribe(data=>this.lesPlaces=data);*/
    }
    //evenet
    supprimerEvent(id:number):void{
       this.serviceEvent.deleteEvenment(id).subscribe();
    }
}
