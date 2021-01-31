import { CvCoverComponent } from './views/cv-cover/cv-cover.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ResumeComponent } from './views/resume/resume.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ResumeComponent,
    CvCoverComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AlertModule.forRoot()
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
