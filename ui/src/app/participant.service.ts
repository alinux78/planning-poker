import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participant } from './participant';
import { Observable } from 'rxjs';

@Injectable()
export class ParticipantService {

  private participantsUrl: string;

  constructor(private http: HttpClient) {
    this.participantsUrl = 'http://localhost:8080/participants';
  }

  public findAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.participantsUrl);
  }

  public save(participant: Participant) {
    return this.http.post<Participant>(this.participantsUrl + "/" + participant.name, "");
  }
}
