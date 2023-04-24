import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

  export class LogoutComponent implements OnInit{

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }
/* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/
  ngOnInit() {
    this.authenticationService.logout();
    this.router.navigate(['logout']);
  }

}



