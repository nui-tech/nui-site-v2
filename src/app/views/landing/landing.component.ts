import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  faKeyboard = faKeyboard;

  



  constructor(private titleService: Title, private spotify: SpotifyServiceService) {
    this.titleService.setTitle('Portfolio - Nui Rattapon | Web developer | Christchurch | New Zealand');
  }



  ngOnInit(): void {

  }



}
