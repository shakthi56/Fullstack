import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule} from '@angular/forms';
/* we are importing head component and the respective sub components*/
import { CreateBookrecordsComponent } from './create-bookrecords/create-bookrecords.component';
import { UpdateBookDetailsComponent } from './update-bookdetails/update-bookdetails.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageComponent } from './image/image.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookrecordsComponent,
    UpdateBookDetailsComponent,
    BookDetailsComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    ProfileComponent,
    ImageComponent,
    FeedbackComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }