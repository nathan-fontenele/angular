import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  imports: [CommonModule],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css'
})
export class Component08Component {
  media:number =8;
  nomes:string[] = ["Nathan", "Marcos", "Amanda"]
}
