import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-virtualwalk',
  templateUrl: './virtualwalk.component.html',
  styleUrls: ['./virtualwalk.component.css']
})
export class VirtualwalkComponent implements OnInit {
  public selected:Number=0;
  constructor() { }

  ngOnInit(): void {
  }
  
  selectedNumber(number:number):void {
    console.log(number);

     this.selected=number;
    
  }
  
}
