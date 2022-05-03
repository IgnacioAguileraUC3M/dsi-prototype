import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Option_shelf {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() {
    this.getCloset();    
   }
  is_fit = false;
  closet: Array<string> = [];
  possible_shelves: Array<Option_shelf> = [
    {value: 'top', viewValue: "Camisetas"},
    {value: 'top', viewValue: "Camisas"},
    {value: 'top', viewValue: "Tops"},
    {value: 'top', viewValue: "T-shirts"},
    {value: 'top', viewValue: "Camisetas de manga larga"},
    {value: 'top', viewValue: "Camisetas de tirantes"},
    {value: 'pants', viewValue: "Pantalones"},
    {value: 'pants', viewValue: "Pantalones cortos"},
    {value: 'pants', viewValue: "Pantalones de chandal"},
    {value: 'pants', viewValue: "Pantalones vaqueros"},
    {value: 'over', viewValue: "Sudaderas"},
    {value: 'over', viewValue: "Jerseys"},
    {value: 'over', viewValue: "Cortavientos"},
    {value: 'over', viewValue: "Chaquetas"},
    {value: 'calcetines', viewValue: "Calcetines"},
    {value: 'pies', viewValue: "Zapatos"},
    {value: 'pies', viewValue: "Zapatillas"}
  ];
  ngOnInit(): void {
    let fit = this.getFit();
    this.display_fit(fit);
  }

  getCloset(){
    let a = localStorage.getItem('closet');
    if(a != null){
      this.closet = JSON.parse(a);
    }
    else{
      //Poner que no hay closet
      localStorage.setItem('closet', JSON.stringify([]));
    }
  }

  getShelve_top(){
    // possible_shelves
    for(let opt of this.possible_shelves){
      let val = opt.viewValue
      if(this.closet.includes(val)){
        if(opt.value == "top"){
          if(val != null){
            let shelf = localStorage.getItem(val);
            if(shelf != null){
              return JSON.parse(shelf);
            }
          }
        }
      } 
    }
    return null
  }

  getShelve_over(){
    // possible_shelves
    for(let opt of this.possible_shelves){
      let val = opt.viewValue
      if(this.closet.includes(val)){
        if(opt.value == "over"){
          if(val != null){
            let shelf = localStorage.getItem(val);
            if(shelf != null){
              return JSON.parse(shelf);
            }
          }
        }
      } 
    }
    return null
  }

  getShelve_pants(){
    // possible_shelves
    for(let opt of this.possible_shelves){
      let val = opt.viewValue
      if(this.closet.includes(val)){
        if(opt.value == "pants"){
          if(val != null){
            let shelf = localStorage.getItem(val);
            if(shelf != null){
              return JSON.parse(shelf);
            }
          }
        }
      } 
    }
    return null
  }

  getFit(){
    let over = this.getShelve_over();
    let top = this.getShelve_top();
    let pants = this.getShelve_pants();
    let error_component = document.getElementById("errors_div");
    
    if(over != null && top != null && pants != null){
      console.log("hay baldas")
      let over_clothe = null
      let top_clothe = null
      let pants_clothe = null
      if(over.length > 0){
        over_clothe = over[Math.floor(Math.random()*over.length)];
      }

      if(top.length > 0){
        top_clothe = top[Math.floor(Math.random()*top.length)];
      }
  
      if(pants.length > 0){
        pants_clothe = pants[Math.floor(Math.random()*pants.length)];
      }
    
      if(over_clothe == null || top_clothe ==null || pants_clothe == null){
        //no hay ropa en alguna balda
        if(error_component != null){
          let msg = document.createTextNode("no hay ropa en alguna balda");
          error_component.appendChild(msg);
        }
      }
      console.log("hay fit")
      return [top_clothe, over_clothe, pants_clothe]
    }
    else{
      //decir que no hay baldas creadas
      if(error_component != null){
        console.log("aaaaaaaaaaaa")
        let msg = document.createTextNode("No haysuficientes baldas creadas");
        error_component.append(msg);
        console.log(error_component);
      }
    }
    return [null]
  }

  display_fit(fit:Array<string|null>){
    let outfid_div = document.getElementById("outfit"); 
    console.log(fit)
    if(fit == [null]){
      console.log("no hay fit")
    }
    if(fit[0] != null && fit[1] != null && fit[2] != null){
      this.generate_top_div(fit[0])
    
      this.generate_over_div(fit[1])
    
      this.generate_pants_div(fit[2])
      this.is_fit = true;
    }
    

  }

  generate_top_div(clothe: string){
    let fit_div = document.getElementById("outfit");
    let div = document.createElement("div");
    div.setAttribute("class", "clothe_div");
    let img = document.createElement("img");
    img.setAttribute("src", "assets/nike_negra.png");
    img.setAttribute("class", "fit_img");
    div.append(img);
    if(fit_div != null){
      fit_div.append(div)
    }
    this.generate_fit_tab("Camiseta", clothe)
  }

  generate_over_div(clothe: string){
    let fit_div = document.getElementById("outfit");
    let div = document.createElement("div");
    div.setAttribute("class", "clothe_div");
    let img = document.createElement("img");
    img.setAttribute("src", "assets/sudadera_azul.png");
    img.setAttribute("class", "fit_img");
    div.append(img);
    if(fit_div != null){
      fit_div.append(div)
    }
    this.generate_fit_tab("Sudadera", clothe)
  }
  generate_pants_div(clothe: string){
    let fit_div = document.getElementById("outfit");
    let div = document.createElement("div");
    div.setAttribute("class", "clothe_div");
    let img = document.createElement("img");
    img.setAttribute("src", "assets/pantalon_zara.png");
    img.setAttribute("class", "fit_img");
    div.append(img);
    if(fit_div != null){
      fit_div.append(div)
    }
    this.generate_fit_tab("Pantalones", clothe)
  }

  generate_fit_tab(title: string, clothe:string){
    let container = document.getElementById("tabs_container");
    if(container != null){
      let tab = document.createElement("div") 
      tab.setAttribute("class", "fit_info_tab")
      let txt = document.createTextNode(clothe)
      let title_par = document.createElement("par")
      let title_txt = document.createTextNode(title)
      let separator = document.createElement("div")
      let br = document.createElement("br")
      separator.setAttribute("class", "separator")
      title_par.setAttribute("class", "fit_info_title")
      title_par.append(title_txt)
      tab.append(title_par)
      tab.append(br)
      tab.append(separator);
      tab.append(txt)
      container.append(tab)
    }
  }

  refresh(){
    window.location.reload()
  }
}
