import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer-->
  <footer class="footer text-center">
    <div class="container">
      <div class="row">
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Some old stuffs</h4>
        <a href="/cover" >Scrolling animation</a>
      </div>
        <!-- Footer Social Icons-->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Find me online</h4>
          <a class="btn btn-outline-light btn-social mx-1" target="blank" href="//github.com/nui-tech">
            <fa-icon [icon]="faGithub"></fa-icon>
          </a>
          <a class="btn btn-outline-light btn-social mx-1" target="blank" href="//linkedin.com/in/nui-tech">
            <fa-icon [icon]="faLinkedin"></fa-icon>
          </a>
        </div>
        <!-- Footer About Text-->
        <div class="col-lg-4 mb-5 mb-lg-0" >
          <h4 class="text-uppercase mb-4">Now coding tune</h4>
          <div class="d-inline">
            <fa-icon style="color:#1ed760;" [icon]="faSpotify"></fa-icon> 
            &nbsp;
            <span *ngIf="nowPlaying.href != '#'; else notPlaying">
              <a [href]="nowPlaying.href">{{nowPlaying.track}}</a>
            </span>
            <ng-template #notPlaying>
              <span>{{nowPlaying.track}}</span>
            </ng-template>
            <span>&nbsp;-&nbsp;{{nowPlaying.artist}}</span>
            <br>
            <span class="text-muted">{{playlist}}</span>
          </div>
        </div>
      </div>
  </div>
</footer>
<!-- Copyright Section-->
<div class="copyright py-4 text-center text-white">
  <div class="container"><small>Built with Jamstack | Angular + Scully + Netlify</small></div>
</div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  faSpotify = faSpotify;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  
  nowPlaying = {track:'Not playing', href:'#', artist:'Spotify'};
  playInterval;
  playlist = '';

  constructor(private spotify: SpotifyServiceService) {}



  ngOnInit(): void {
    this.spotify.getCurrentPlaying()
    .subscribe( res => this.setSpotifyDetails(res));
    
    setInterval(() => {
      this.playInterval = this.spotify.getCurrentPlaying()
      .subscribe( res => this.setSpotifyDetails(res));
    }, 3*60*1000);
  }

  ngOnDestroy(){
    clearInterval(this.playInterval);
  }

  private setSpotifyDetails(res:any){
    let _pl = res.playlistId.split(':')[2];
    this.nowPlaying = res;
 
    if(!_pl) return;
    this.spotify.getCurrentPlaylist(_pl)
    .subscribe( 
      pl => this.playlist = pl, 
      () =>  console.log('no playlist')
    );
  }

}
