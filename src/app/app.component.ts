import { DocumentData } from 'firebase/firestore';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { System } from './system';
import { delay } from 'rxjs';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shimmerArray = new Array(2);
  loadingSystems = false;
  systems: any[] | undefined;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.loadRepos();
  }

  gitHubIconColor: string = 'red';
  linkedinIconColor: string = 'red';
  whatsappIconColor: string = 'red';
  emailIconColor: string = 'red';

  options: AnimationOptions = {
    path: '/assets/animation/animation.json',
  };

  async loadRepos() {
    this.loadingSystems = true;
    await new Promise((f) => setTimeout(f, 1000));
    this.service.getSystems().subscribe((res) => {
      this.systems = res;
      this.loadingSystems = false;
    });
  }

  githubEvent(event: any) {
    this.gitHubIconColor == 'red'
      ? (this.gitHubIconColor = 'white')
      : (this.gitHubIconColor = 'red');
  }

  linkedinEvent(event: any) {
    this.linkedinIconColor == 'red'
      ? (this.linkedinIconColor = '#0E76A8')
      : (this.linkedinIconColor = 'red');
  }

  whatsappEvent(event: any) {
    this.whatsappIconColor == 'red'
      ? (this.whatsappIconColor = '#25D366')
      : (this.whatsappIconColor = 'red');
  }

  emailEvent(event: any) {
    this.emailIconColor == 'red'
      ? (this.emailIconColor = 'white')
      : (this.emailIconColor = 'red');
  }
}
