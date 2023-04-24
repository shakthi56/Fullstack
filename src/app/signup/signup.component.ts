import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  password: string=" " ;
  
  yourname: string="";
  youremail: string=" ";

  constructor(public loginService:AuthenticationService ,
    private router: Router ) { }
    /* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/
  ngOnInit() {


}


  /*confirmRegister(){
    
    var status= confirm("register successfully");
     if (status==true) {
      this.router.navigate(['login']);
       
     }
     
  
    }*/
    confirmRegister(){

      if(this.yourname === '' || this.youremail === '' || this.password === ''){
        var status = confirm("It is mandatory to fill all the fields");
      }
      else{
      var status = confirm("Registered Successfully");
      if(status==true){
        this.router.navigate(['login']);
      }
      }
    }

}
