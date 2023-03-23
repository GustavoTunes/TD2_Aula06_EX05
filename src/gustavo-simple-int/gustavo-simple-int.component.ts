import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gustavo-simple-int',
  standalone: true,
  templateUrl: './gustavo-simple-int.component.html',
  styleUrls: ['./gustavo-simple-int.component.css'],
  imports: [CommonModule,FormsModule],
})
export class GustavoSimpleIntComponent implements OnInit {
  valor: number;
  meses: number;
  taxa: number;

  calcjuros() {
    return (this.taxa / 100) * this.meses * this.valor;
  }
  constructor() { }

  ngOnInit() {
  }

}