import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(6)]);
  pass1 = new FormControl('', [Validators.required, Validators.minLength(6)]);
  hide = true;
  hideconfrim=true;
  hasError =false;
  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(){
    //this line use router to navigate
    //TODO ADD SUBMIT LOGIC HERE
    //TODO ADD BETTER APROACH FOR FORM HANDLING
    console.log(this.email);
    console.log(this.pass);
    if(this.pass.value != this.pass1.value ){
      this.hasError=true;
    }else{
      this.hasError=false;
    }
    if(this.email.value =="" || this.pass.value=="" || this.pass1.value ==""  ){
      this.hasError=true;
    }else{
      this.hasError=false;
      //TODO ADD REGISTRATION LOGIC
     
      

    }
    

  }

}
