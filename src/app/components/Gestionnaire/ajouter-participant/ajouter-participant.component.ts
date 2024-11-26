import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Participant } from 'src/app/classes/participant';
import { ParticipantsService } from 'src/app/services/participants.service';

@Component({
  selector: 'app-ajouter-participant',
  templateUrl: './ajouter-participant.component.html',
  styleUrls: ['./ajouter-participant.component.css']
})
export class AjouterParticipantComponent implements OnInit {
  ParticipantForum!: FormGroup;
  lesparticipants: Participant[] = [];

  constructor(private fb: FormBuilder, private participantService: ParticipantsService,private router: Router) {}

  ngOnInit(): void {
    this.ParticipantForum = this.fb.group({
      NomPersonne: [''],
      PrenomPersonne: [''],
      NationnalitePersonne: [''],
      AdressePersonne: [''],
      TelPersonne: [''],
      EmailPersonne: [''],
      AgeParticipant: [''],
      sexeParticipant: [''],
      maladieParticipant: [false]
    });
  }

  addparticipant() {
    this.participantService.RegistrationParticipant(this.ParticipantForum.value).subscribe(data => this.lesparticipants.push(data));
    this.router.navigate(['/gestion/ListParticipant']);
  }

  onresetForm() {
    this.ParticipantForum.reset();
  }
}
