import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VotingService } from './voting.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  topic: string;

  constructor(private router: Router, 
    private votingService: VotingService) {
    this.title = 'Planning poker';
    let me = this;
    votingService.getTopic().subscribe(result => this.topic = result.name);
  }

  onSubmit() {
    this.votingService.setTopic(this.topic);
  }

}
