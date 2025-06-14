import { Component } from '@angular/core';

//Regras de negócios e funções
@Component({
  selector: 'app-component01',
  imports: [],
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.css'
})
export class Component01Component {
    nome:string = "Nathan";
    idade:number = 24;
}
