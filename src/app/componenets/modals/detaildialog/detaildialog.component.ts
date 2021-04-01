import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { FbxdialogComponent } from '../fbxdialog/fbxdialog.component';
import { Router, RouterModule } from '@angular/router';

export interface DialogData {
  number: Number;
}
@Component({
  selector: 'app-detaildialog',
  templateUrl: './detaildialog.component.html',
  styleUrls: ['./detaildialog.component.css']
})
export class DetaildialogComponent implements OnInit {
   public selected:any;
   products: any = [];
   public dataPlaces :any =[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private httpClient: HttpClient,public dialog: MatDialog,public router:Router) {}
  ngOnInit(): void {
    let temp:any;
     this.selected=this.data.number;
     console.log(this.selected);
     this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      temp= data;
      this.products = temp[this.selected-1];
      this.dataPlaces =data; 

      
    
    })
  }
  openDialog(num:number) {
    this.dialog.open(FbxdialogComponent, {
      data: {
        number: num
      },
      
    });
  }
  changedata(num:number){
    console.log("mpainw");
    this.products = this.dataPlaces[num-1];
    this.selected=num;
    
  }
  open3DModel(){
    //this.openDialog(this.selected);
   // Converts the route into a string that can be used 
  // with the window.open() function
  const url = this.router.serializeUrl(
    this.router.createUrlTree([`/fbxdialog`,this.selected])
  );

  window.open(url, '_blank');
  }
}
