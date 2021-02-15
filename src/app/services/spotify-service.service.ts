import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {

  constructor(private http: HttpClient) { }

  private token = "Bearer BQDhj0ZeZWv-NsmbIQ66od_cUE-WY6qNKZ9YqknkleavAZhX4i_ek62SkRVPVDetVcQ6XoaJxo0jLg_g8opFvK_3pYFtzj8YnhFWMZsW9L3vNiAPCOMratoRRHRbyfSP6I2MZCYzE9JOK_xkpBnEDHQN-WiAxpxs3UQ6gO9Tj73DL9trHKg";

  /**
   * Get Spotify current play track
   *
   * @return {*} 
   * @memberof SpotifyServiceService
   */
  getCurrentPlaying() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    });

    return this.http.get("https://api.spotify.com/v1/me/player/currently-playing?market=NZ&additional_types=episode", { headers: headers })
      .pipe(map((res: any) => {
        // console.log(res);
        return { track: res.item.name, href: res.item.external_urls.spotify, artist: res.item.artists[0].name, playlistId: res.context.uri? res.context.uri : '' }
      }));
  }

  /**
   *  Get Playlist name by ID
   *
   * @param {string} id
   * @return {*} 
   * @memberof SpotifyServiceService
   */
  getCurrentPlaylist(id: string) {
    if(!id) return;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    });

    return this.http.get(`https://api.spotify.com/v1/playlists/${id}`, { headers: headers })
      .pipe(
        map( (res: any) => { return res.name; })
      );
  }



}
