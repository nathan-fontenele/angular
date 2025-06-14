import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {
  text:string = 'Olá';

  alter(){
    if(this.text === 'Olá'){
      this.text = 'Mundo';
    }else{
      this.text = 'Olá'
    }
  }
}
