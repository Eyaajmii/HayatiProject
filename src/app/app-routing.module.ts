import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashpublicComponent } from './components/public/dashpublic/dashpublic.component';
import { HomeComponent } from './components/public/home/home.component';
import { ParticuliersComponent } from './components/public/particuliers/particuliers.component';
import { EntreprisesComponent } from './components/public/entreprises/entreprises.component';
import { HayettAssuranceComponent } from './components/public/hayett-assurance/hayett-assurance.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { LoginComponent } from './components/login/login.component';
import { DashGestionnaireComponent } from './components/Gestionnaire/dash-gestionnaire/dash-gestionnaire.component';
import { HomeGestionnaireComponent } from './components/Gestionnaire/home-gestionnaire/home-gestionnaire.component';
import { ConsulterParticipantComponent } from './components/Gestionnaire/consulter-participant/consulter-participant.component';
import { AjouterParticipantComponent } from './components/Gestionnaire/ajouter-participant/ajouter-participant.component';
import { AjouterEventComponent } from './components/Gestionnaire/ajouter-event/ajouter-event.component';
import { ModifierEventComponent } from './components/Gestionnaire/modifier-event/modifier-event.component';
import { ConsultEventComponent } from './components/Gestionnaire/consult-event/consult-event.component';
const routes: Routes = [
  //publicdash
  {
    path: '',
    component: DashpublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: 'Particuliers', title: 'Particuliers', component: ParticuliersComponent },
      { path: 'Entreprises', title: 'Entreprises', component: EntreprisesComponent },
      {path:'HayettAssurance',title:'HayettAssurance',component:HayettAssuranceComponent},
      
    ]},
    {path:'gestion',component:DashGestionnaireComponent,children:[
      { path: '', redirectTo: 'Espace', pathMatch: 'full' },
      {path:'Espace',title:'Espace',component:HomeGestionnaireComponent},
      {path:'ListParticipant',title:'Liste des participants',component:ConsulterParticipantComponent},
      {path:'Evenement',title:'Les Evenements',component:ConsultEventComponent},
      {path:'AjouterParticipant',title:'Ajouter des Participants',component:AjouterParticipantComponent},
      {path:'AjouterEvenement',title:'Ajouter des Evénements',component:AjouterEventComponent},
      {path:'modifierevenement',title:'Modifier Evenement',component:ModifierEventComponent},
      ]},
    //login
    { path: 'extranet', title: 'extranet', component:LoginComponent },
    {path: '**', title: 'Error 404', component: ErreurComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
