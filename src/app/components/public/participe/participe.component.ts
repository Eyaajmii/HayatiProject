import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Participant } from 'src/app/classes/participant';
import { ParticipantsService } from 'src/app/services/participants.service';

@Component({
  selector: 'app-participe',
  templateUrl: './participe.component.html',
  styleUrls: ['./participe.component.css']
})
export class ParticipeComponent {
  InscrirForum!: FormGroup;
  lesparticipants: Participant[] = [];

  constructor(private fb: FormBuilder, private participantService: ParticipantsService,private router: Router) {}

  ngOnInit(): void {
    this.InscrirForum = this.fb.group({
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
    this.participantService.RegistrationParticipant(this.InscrirForum.value).subscribe(data => this.lesparticipants.push(data));
    this.router.navigate(['/home']);
  }
}
