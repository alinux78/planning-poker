import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../participant.service';
import { Participant } from '../participant';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent {

  participant: Participant;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private participantService: ParticipantService) {
    this.participant = new Participant();
  }

  onSubmit() {
    this.participantService.save(this.participant).subscribe(result => this.gotoParticipantsList());
  }

  gotoParticipantsList() {
    this.router.navigate(['/participants']);
  }
}
