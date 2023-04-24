import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookrecordsComponent } from './create-bookrecords/create-bookrecords.component';
import { UpdateBookDetailsComponent } from './update-bookdetails/update-bookdetails.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
/* there are the path for the sub components and we are importing the respective components*/

const routes: Routes = [
  
  {path: 'books', component: BookListComponent, canActivate :[AuthGuardService] },
  {path: 'create-bookrecords', component: CreateBookrecordsComponent, canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-bookdetails/:bookId', component: UpdateBookDetailsComponent ,canActivate:[AuthGuardService]},
  {path: 'book-details/:bookId', component: BookDetailsComponent ,canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent ,canActivate:[AuthGuardService] },
  {path: 'signup', component: SignupComponent },
  {path: 'profile', component: ProfileComponent ,canActivate:[AuthGuardService]},
  {path: 'feedback',component: FeedbackComponent,canActivate:[AuthGuardService]}


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }

