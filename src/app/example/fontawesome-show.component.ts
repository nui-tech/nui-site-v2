import { Component, OnInit } from '@angular/core';
import { faAppleAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fontawesome-show',
  template: `
  <div class="container pt-5">
    <h1>FontAwesome example</h1>
    <h1>
      <fa-icon [icon]="faCoffee"></fa-icon>
      <fa-icon [icon]="faAppleAlt"></fa-icon>

    </h1>
  </div>
  `,
  styles: [
  ]
})
export class FontawesomeShowComponent implements OnInit {
  faCoffee = faCoffee;
  faAppleAlt = faAppleAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
