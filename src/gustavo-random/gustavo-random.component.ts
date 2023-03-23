import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gustavo-random',
  standalone: true,
  templateUrl: './gustavo-random.component.html',
  styleUrls: ['./gustavo-random.component.css'],
  imports: [CommonModule,FormsModule],
})
export class GustavoRandomComponent implements OnInit {
  n: number = 10;
  arr: number[];

  constructor() {}

  ngOnInit() {}

  update(){
    this.arr = [];
    for (let i = 1; i <= this.n; i++) {
      this.arr.push(Math.trunc(100 * Math.random()));
    }
  }

  getNumbers() {
    return this.arr;
  }
}