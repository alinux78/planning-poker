import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VotingService } from './voting.service';
import { Participant } from './participant';

export var currentParticipant:Participant = null;

export function setCurrentParticipant(p:Participant) {
  currentParticipant = p;
}

export function getCurrentParticipant(): Participant {
  return currentParticipant;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{

  title: string;

  topic: string;
  currentTopic: string;
  interval: any;

  constructor(private router: Router, 
    private votingService: VotingService) {
    this.title = 'Planning poker';
    this.refreshData();
    this.router.navigate(['/participants']);
  }

  onSubmit() {
    this.votingService.setTopic(this.topic);
  }

  isVotingStarted(): boolean {
    let currentTopic = this.votingService.getCurrentTopic();
    if (currentTopic) {
      return this.votingService.getCurrentTopic().votingStarted;
    }
    return false;
  }

  getCurrentParticipant() {
    return currentParticipant;
  }

  startVoting() {
    this.votingService.startVoting();
  }

  stopVoting() {
    this.votingService.stopVoting();
  }

  refreshData() {
    this.votingService.getTopic().subscribe(result => this.currentTopic = result ? result.name: null);
  }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => { 
	    this.refreshData();
    }, 3000);
  }



}
