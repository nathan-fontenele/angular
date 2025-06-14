import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css'
})
export class Component04Component {
  exibir:boolean = true;

  action(){
    if (this.exibir === true){
      this.exibir = false;
    }
    else{
      this.exibir = true;
    }
  }
}
