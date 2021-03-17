import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  participants: Participant[];
  interval: any;

  constructor(private participantService: ParticipantService) {
  }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => { 
	    this.refreshData(); 
    }, 3000);
  }

  refreshData(){
    this.participantService.findAll()
        .subscribe(data => {
            this.participants = data;
        });
  }
}
