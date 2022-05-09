import { verifyHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
    name : any;
    iceCream : any;
    listOfMenu : any
    array : any = [];

   constructor() { 
     
   } 
  
   myFunction(){
    this.array.push (this.iceCream)
   }
}