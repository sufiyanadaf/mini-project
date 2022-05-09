import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myimage: string = "assets/image/Fresh-Strawberry-Ice-Cream.jpg";

  constructor() {
    
   }

  ngOnInit(): void {
   
  }

}
