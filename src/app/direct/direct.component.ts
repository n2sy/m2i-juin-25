import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bgColor = 'red';
  txtColor = 'white';
  font = 'phosphate';
}
