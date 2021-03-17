import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantService } from './participant.service';
import { ParticipantFormComponent } from './participant-form/participant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantListComponent,
    ParticipantFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
