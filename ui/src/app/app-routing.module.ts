import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParticipantListComponent } from './participant-list/participant-list.component'
import {ParticipantFormComponent } from './participant-form/participant-form.component'


const routes: Routes = [
  { path: 'participants', component: ParticipantListComponent },
  { path: 'addParticipant', component: ParticipantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
