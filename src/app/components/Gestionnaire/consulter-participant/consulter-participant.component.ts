import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from 'src/app/classes/participant';
import { ParticipantsService } from 'src/app/services/participants.service';

@Component({
  selector: 'app-consulter-participant',
  templateUrl: './consulter-participant.component.html',
  styleUrls: ['./consulter-participant.component.css']
})
export class ConsulterParticipantComponent implements OnInit{
  lesparticipants:Participant[]=[];
  constructor(private partService:ParticipantsService ,private router:Router){}
  ngOnInit(): void {
    this.partService.getParticipant().subscribe(data=>this.lesparticipants=data);
  }
  SupprimerParticipant(id: number): void {
    this.partService.removeParticipant(id).subscribe();
    alert("participant Supprimé");

  }

}
