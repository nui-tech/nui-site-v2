import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio - Nui Rattapon | Web developer | Christchurch | New Zealand');
  }

  ngOnInit(): void {
  }

}
