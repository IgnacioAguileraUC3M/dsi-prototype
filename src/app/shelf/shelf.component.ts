import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  closet: Array<string> = [];
  is_clothe_form = false;
  isShelf = false;
  shelf_array!: Array<string>;
  @Input() shelf!: string;

  constructor() { 
  }
  ngOnInit(): void {
    this.get_closet();
    this.get_shelf();
  }

  toggleClotheForm(){
    this.is_clothe_form =! this.is_clothe_form;
  }

  get_closet() {
    let closet_data = localStorage.getItem('closet');
    if(closet_data == null){
      localStorage.setItem('closet', "[]");
      this.closet = [];
    }
    else{
      this.closet = JSON.parse(closet_data);
    }
  }

  get_shelf(){
    console.log(this.shelf)
    let a = document.getElementById("shelf_title")?.innerHTML
    console.log(a)
    if(this.shelf != null){
      let str = localStorage.getItem(this.shelf);
      if(str != null){
        let arr = JSON.parse(str);
        this.shelf_array = arr;
        console.log(this.shelf_array);
      }
    }
  }

  return(){

  }

  add_clothe(){
    let clothe = (document.getElementById("clothe_input") as HTMLInputElement).value;
    if(clothe == null){
      return
    }
    this.shelf_array.push(clothe)
    localStorage.setItem(this.shelf, JSON.stringify(this.shelf_array))
    this.is_clothe_form =! this.is_clothe_form
  }

  toggle_shelf(){
    this.isShelf =! this.isShelf;
  }

  delete_shelf(){
    localStorage.removeItem(this.shelf)
    console.log(this.closet)
    const index_ = this.closet.indexOf(this.shelf, 0);
    if (index_ > -1) {
      this.closet.splice(index_, 1);
    }
    console.log(this.closet)
    localStorage.setItem('closet', JSON.stringify(this.closet))
    window.location.reload();
  }

}
