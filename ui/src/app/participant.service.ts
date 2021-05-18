import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participant } from './participant';
import { Observable } from 'rxjs';

@Injectable()
export class ParticipantService {

  private participantsUrl: string;

  private localParticipant: Participant;

  constructor(private http: HttpClient) {
    this.participantsUrl = 'http://localhost:8080/participants';
  }

  public findAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.participantsUrl);
  }

  public save(participant: Participant) {
    return this.http.put<Participant>(this.participantsUrl + "/" + participant.name, "").subscribe( p => this.localParticipant = JSON.parse(p) as Participant);
  }



  public remove(participant: Participant) {
    return this.http.delete<Participant>(this.participantsUrl + "/" + participant.name);
  }

}
