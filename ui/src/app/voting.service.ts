import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './topic'; 

@Injectable()
export class VotingService {

  private votingUrl: string;
  private topicUrl: string;
  private currentTopic: Topic; 

  constructor(private http: HttpClient) {
    this.votingUrl = 'http://localhost:8080/voting';
    this.topicUrl =  this.votingUrl + '/topic';
  }

  public getCurrentTopic(): Topic {
    return this.currentTopic;
  }

  public getTopic(): Observable<Topic> {
    let data = this.http.get<Topic>(this.topicUrl + "/current");
    data.subscribe(result => this.currentTopic = result )
    return data;
  }

  public setTopic(topicName: string) {
    return this.http.put<Topic>(this.topicUrl + "/" + topicName, "").subscribe(result => this.currentTopic = result);
  }

  startVoting() {
    if (this.currentTopic) {
      this.http.put(this.votingUrl + "/start/" + this.currentTopic.id, "");
    }
  }

  stopVoting() {
    if (this.currentTopic) {
      this.http.put(this.votingUrl + "/stop/" + this.currentTopic.id, "");
    }
  }


}
