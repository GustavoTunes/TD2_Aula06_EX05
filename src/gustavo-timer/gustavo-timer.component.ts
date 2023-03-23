import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gustavo-timer',
  standalone: true,
  templateUrl: './gustavo-timer.component.html',
  styleUrls: ['./gustavo-timer.component.css'],
})
export class GustavoTimerComponent implements OnInit {
  segundo: number = 0;
  intervalo;

  startTimer() {
    this.intervalo = setInterval(() => {
      this.segundo++;
    }, 100);
  }

  pauseTimer() {
    clearInterval(this.intervalo);
  }

  parar() {
    clearInterval(this.intervalo);
    this.segundo = 0;
  }
  constructor() {}

  ngOnInit() {}
}
