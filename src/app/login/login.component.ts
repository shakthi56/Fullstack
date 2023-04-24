import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class  LoginComponent  implements  OnInit{
  username ='';
  password ='';
  invalidLogin = false;
  emessage!: string;
  


constructor(private router: Router,

  private loginservice: AuthenticationService) { }
  /* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/
  ngOnInit() {
  
    }
    checkLogin(){
      if (this.loginservice.authenticate(this.username, this.password)
      ) {
        var status = confirm("Logged In Successfully");
        if (status == true) {
      this.router.navigate(['books']);
      console.log("navigate..");
      
      this.invalidLogin = false;
      } else
      this.invalidLogin = true;
      this.emessage ='enter correct credentials';
      }
    }
  }
    