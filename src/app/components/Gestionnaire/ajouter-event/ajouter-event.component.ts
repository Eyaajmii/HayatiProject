import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/classes/evenement';
import { AutresService } from 'src/app/services/autres.service';
import { EvenementsService } from 'src/app/services/evenements.service';

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent implements OnInit {
  EventForm!: FormGroup;
  DateForm!: FormGroup;
  lesevents: Evenement[] = [];
  lesDates:Date[]=[];

  constructor(private autreService:AutresService,private fb: FormBuilder, private evenementService: EvenementsService, private router: Router) {}

  ngOnInit(): void {
    this.EventForm = this.fb.group({
      NomEvent: [''],
      Description: [''],
      TypeEvent: [''],
      programmeEvent: [''],
      Compagnies:this.fb.array([]),
      DateEvent: this.fb.group({
        DatePréci: [''],
        HeureDebut: [''],
        HeureFin: [''],
      }),
      Places:this.fb.array([]),
      Fournisseurs:this.fb.array([]),
      Organismes:this.fb.array([]),
    });
  }
  //Compagnie
  public get LesCompagnies(){
    return this.EventForm.get('Compagnies') as FormArray;
  }
  onajoutCompagnie(){
    this.LesCompagnies.push(this.fb.control(''));
  }
  //place
  public get lesPlaces(){
    return this.EventForm.get('Places') as FormArray;
  }
  onajoutPlace(){
    this.lesPlaces.push(this.fb.control(''));
  }
  //Fournisseur
  public get lesFournisseurs(){
    return  this.EventForm.get("Fournisseurs") as FormArray;
  }
  onajoutFournisseur(){
    this.lesFournisseurs.push(this.fb.control(''));
  }
  //Oragnisme
  public get lesOrganismes(){
    return  this.EventForm.get("Organismes")as FormArray;;
  }
  onajoutOrganisme(){
    this.lesOrganismes.push(this.fb.control(''));
  }
  addEventt() {
    this.evenementService.addEvenment(this.EventForm.value).subscribe(data => this.lesevents.push(data));
    this.autreService.addDate(this.DateForm.value).subscribe(data=>this.lesDates.push(data));
  }
}
