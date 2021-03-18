import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './topic';

@Injectable()
export class VotingService {

  private topicUrl: string;

  constructor(private http: HttpClient) {
    this.topicUrl = 'http://localhost:8080/voting/topic';
  }

  public getTopic(): Observable<Topic> {
    return this.http.get<Topic>(this.topicUrl);
  }

  public setTopic(topicName: string) {
    return this.http.post<string>(this.topicUrl + "/" + topicName, "").subscribe(result => console.log("topic set"));
  }
}
