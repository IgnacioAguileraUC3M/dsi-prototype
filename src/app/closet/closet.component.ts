import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

interface Option_shelf {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-closet',
  templateUrl: './closet.component.html',
  styleUrls: ['./closet.component.css']
})
export class ClosetComponent implements OnInit {
  // closet: JSON = JSON.parse("{}"); ------------------
  closet: Array<string> = []; //Array of all shelves created

  selected_shelf!: string;
  possible_shelves: Array<Option_shelf> = [
    {value: 'arriba-1', viewValue: "Camisetas"},
    {value: 'arriba-2', viewValue: "Camisas"},
    {value: 'arriba-3', viewValue: "Tops"},
    {value: 'arriba-4', viewValue: "T-shirts"},
    {value: 'arriba-5', viewValue: "Camisetas de manga larga"},
    {value: 'arriba-6', viewValue: "Camisetas de tirantes"},
    {value: 'pantalones-1', viewValue: "Pantalones"},
    {value: 'pantalones-2', viewValue: "Pantalones cortos"},
    {value: 'pantalones-3', viewValue: "Pantalones de chandal"},
    {value: 'pantalones-4', viewValue: "Pantalones vaqueros"},
    {value: 'over-1', viewValue: "Sudaderas"},
    {value: 'over-2', viewValue: "Jerseys"},
    {value: 'over-3', viewValue: "Cortavientos"},
    {value: 'over-4', viewValue: "Chaquetas"},
    {value: 'calcetines', viewValue: "Calcetines"},
    {value: 'pies-1', viewValue: "Zapatos"},
    {value: 'pies-2', viewValue: "Zapatillas"}
  ];

  

  is_form: boolean = false;
  selectedSimpleItem = 'Select item';
  constructor() {
    this.get_closet();
  }
  
  toggleForm(){
    this.is_form =! this.is_form;
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



  add_shelf(){
    let shelf: string = this.selected_shelf;

    if(shelf == undefined){
      // No shelve selected
      let error = document.getElementById("errors");
      if(error != null){
        error.innerHTML = "Selecciona una balda"
      }
      return
    }
    if(this.closet.includes(shelf)){
      // Selected shelve is already added
      let error = document.getElementById("errors");
      if(error != null){
        error.innerHTML = "La balda ya está añadida"
      }
      return
    }
    this.closet.push(shelf)
    localStorage.setItem('closet', JSON.stringify(this.closet));
    localStorage.setItem(shelf, "[]");
    window.location.reload();
  }
  

  ngOnInit(): void {
  }

}
