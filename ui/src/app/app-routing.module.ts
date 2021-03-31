import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParticipantListComponent } from './participant-list/participant-list.component'
import {ParticipantFormComponent } from './participant-form/participant-form.component'
import {RemoveParticipantFormComponent } from './participant-form/remove-participant-form.component'


const routes: Routes = [
  { path: 'participants', component: ParticipantListComponent },
  { path: 'addParticipant', component: ParticipantFormComponent },
  { path: 'removeParticipant', component: RemoveParticipantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
