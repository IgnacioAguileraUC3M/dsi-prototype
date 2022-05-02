import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'model';
  footer_tabs: Array<string> = [
    "shop",
    "calendar",
    "main",
    "closet",
    "profile"
  ];
  constructor(){
  }

  get_closet(){
  }

  tab_click(tab: string){
    const element = document.getElementById(tab);
    if(element != null){
      element.style.filter = "invert(80%)";
      for(let t of this.footer_tabs){
        if(t != tab){ 
          let other = document.getElementById(t);
          if(other != null){
            other.style.filter = "invert(0%)";
          }
        }
      }
    }
  }

}