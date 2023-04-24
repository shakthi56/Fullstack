import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-bookrecords.component.html',
  styleUrls: ['./create-bookrecords.component.css']
})
export class CreateBookrecordsComponent implements OnInit {

  book: Book = new Book();
  constructor(private bookService: BookService,
    private router: Router) { }

    /* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/
  ngOnInit(): void {
  }

  saveBook(){
    this.bookService.createBook(this.book).subscribe( data =>{
      console.log(data);
      this.goToBookList();
    },
    error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }
  
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }

  confirmSubmit(){
    var status = confirm("your record is successfully ");
    if(status==true){
      console.log(this.book);
    }
    else{
      this.router.navigate(['books']);
    }
  }
  
}