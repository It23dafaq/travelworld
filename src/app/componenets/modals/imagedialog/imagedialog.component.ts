import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  url: any;
}
@Component({
  selector: 'app-imagedialog',
  templateUrl: './imagedialog.component.html',
  styleUrls: ['./imagedialog.component.css'],
  
})

export class ImagedialogComponent implements OnInit {
  public url: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog) { }

  ngOnInit(): void {
   
    this.url=this.data.url;
    console.log("mpika",this.url);
    
  }

}
