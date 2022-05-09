import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-1';

  name : any;
 constructor() { 
  this.title= "Enter Your Name:"
}

}
