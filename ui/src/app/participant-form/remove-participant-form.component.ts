import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../participant.service';
import { setCurrentParticipant, getCurrentParticipant } from '../app.component';


@Component({
  selector: 'app-remove-participant-form',
  templateUrl: './remove-participant-form.component.html',
  styleUrls: []
})
export class RemoveParticipantFormComponent {


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private participantService: ParticipantService) {
  }

  onSubmit(confirmed:boolean) {
    let currentParticipant = getCurrentParticipant();
    if (confirmed && currentParticipant) {
      this.participantService.remove(currentParticipant).subscribe(() => {
        setCurrentParticipant(null);
        this.gotoParticipantsList();
        });
    }
  }

  gotoParticipantsList() {
    this.router.navigate(['/participants']);
  }
}
