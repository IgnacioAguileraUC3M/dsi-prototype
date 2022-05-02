import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  constructor() { }
  @Input() clothe!: string;
  ngOnInit(): void {
  }

}
