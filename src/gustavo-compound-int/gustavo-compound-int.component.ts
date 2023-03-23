import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gustavo-compound-int',
  standalone: true,
  templateUrl: './gustavo-compound-int.component.html',
  styleUrls: ['./gustavo-compound-int.component.css'],
  imports: [CommonModule, FormsModule],
})
export class GustavoCompoundIntComponent implements OnInit {
  valor: number;
  meses: number;
  taxa: number;

  calcjuros() {
    return this.valor*Math.pow(1+this.taxa,this.meses);
  }
  constructor() {}

  ngOnInit() {}
}
