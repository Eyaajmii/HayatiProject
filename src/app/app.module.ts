import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './components/public/event/event.component';
import { ParticuliersComponent } from './components/public/particuliers/particuliers.component';
import { EntreprisesComponent } from './components/public/entreprises/entreprises.component';
import { HayettAssuranceComponent } from './components/public/hayett-assurance/hayett-assurance.component';
import { DashpublicComponent } from './components/public/dashpublic/dashpublic.component';
import { HomeComponent } from './components/public/home/home.component';
import { MenupublicComponent } from './components/public/menupublic/menupublic.component';
import { LoginComponent } from './components/login/login.component';
import { DashGestionnaireComponent } from './components/Gestionnaire/dash-gestionnaire/dash-gestionnaire.component';
import { MenuGestionnaireComponent } from './components/Gestionnaire/menu-gestionnaire/menu-gestionnaire.component';
import { ConsulterParticipantComponent } from './components/Gestionnaire/consulter-participant/consulter-participant.component';
import { AjouterParticipantComponent } from './components/Gestionnaire/ajouter-participant/ajouter-participant.component';
import { AjouterEventComponent } from './components/Gestionnaire/ajouter-event/ajouter-event.component';
import { HomeGestionnaireComponent } from './components/Gestionnaire/home-gestionnaire/home-gestionnaire.component';
import { ModifierEventComponent } from './components/Gestionnaire/modifier-event/modifier-event.component';
import { ConsultEventComponent } from './components/Gestionnaire/consult-event/consult-event.component';
import { ParticipeComponent } from './components/public/participe/participe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    ErreurComponent,
    EventComponent,
    ParticuliersComponent,
    EntreprisesComponent,
    HayettAssuranceComponent,
    DashpublicComponent,
    HomeComponent,
    MenupublicComponent,
    LoginComponent,
    DashGestionnaireComponent,
    MenuGestionnaireComponent,
    ConsulterParticipantComponent,
    AjouterParticipantComponent,
    AjouterEventComponent,
    HomeGestionnaireComponent,
    ModifierEventComponent,
    ConsultEventComponent,
    ParticipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
