import { Injectable } from '@angular/core';
 
@Injectable({
    providedIn: 'root'
})
/* authenticate service is used to check the current credentials of username and password */
export  class AuthenticationService {

    constructor() { }

    authenticate (username: any ,password : any){
        if (username ==="shakthi" && password === "1234") {
            sessionStorage.setItem('username',username)
            return true;
        }else{
            return false;

        }
    }
     isUserLoggedIn(){
        let user = sessionStorage.getItem('username')
        console.log(!(user === null))
        return !(user === null)
     }
     logout() {
        sessionStorage.removeItem('username')
     }

    }
