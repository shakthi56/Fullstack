import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

/* App component is the head component of all sub components. here we are giving the title of our project*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LibraryManagementSystem';

  constructor(public loginService:AuthenticationService , private router: Router ) { }
  ngOnInit() {


}
/* these method is used to confirm logout by user */

confirmLogout(){
  var status= confirm("Are you sure want to logout?");
   if (status==true) {
    this.router.navigate(['logout']);
     
   }
   else{
    this.router.navigate(['books']);
   }

  }
}