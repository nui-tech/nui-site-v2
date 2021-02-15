
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
import { LandingComponent } from './views/landing/landing.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FontawesomeShowComponent } from './example/fontawesome-show.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpotifyServiceService } from './services/spotify-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ResumeComponent,
    CvCoverComponent,
    NavComponent,
    LandingComponent,
    FontawesomeShowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ScullyLibModule,
    FontAwesomeModule
  ],
  providers: [ Title, SpotifyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
