import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../participant.service';
import { Participant } from '../participant';
import { setCurrentParticipant } from '../app.component';


@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: []
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
    if (this.participant.name) {
      this.participantService.save(this.participant).subscribe(() => {
        setCurrentParticipant(this.participant);
        this.gotoParticipantsList();
      });
    } else {
      this.gotoParticipantsList()
    }
  }

  gotoParticipantsList() {
    this.router.navigate(['/participants']);
  }
}
