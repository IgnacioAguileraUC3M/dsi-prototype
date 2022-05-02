import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  isShown: boolean = false ;
  constructor() { }
  toggleShow(){
    this.isShown =! this.isShown;
    console.log(this.isShown)
  }
  ngOnInit(): void {
  }

}
