
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
  hide = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //this method handle error form 
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //this method redirect to sign up
  signUp(){
    //this line use router to navigate
    this.router.navigate(['/signup']);

  }

}
