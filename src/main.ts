import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { GustavoTimerComponent } from './gustavo-timer/gustavo-timer.component';
import { GustavoRandomComponent } from './gustavo-random/gustavo-random.component';
import { GustavoSimpleIntComponent } from './gustavo-simple-int/gustavo-simple-int.component';
import { GustavoCompoundIntComponent } from './gustavo-compound-int/gustavo-compound-int.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    GustavoTimerComponent,
    GustavoRandomComponent,
    GustavoSimpleIntComponent,
    GustavoCompoundIntComponent
  ],
  template: `
  <app-gustavo-timer></app-gustavo-timer>
  <app-gustavo-simple-int></app-gustavo-simple-int>
  <app-gustavo-compound-int></app-gustavo-compound-int>
  <app-gustavo-random></app-gustavo-random>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
