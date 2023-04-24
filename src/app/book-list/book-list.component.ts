import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

/* Here we are implementing ng onit method for view by id and it moves  to get bookdetails by id 
ng onitmethod pass default constructor */


export class BookListComponent implements OnInit {

  
  bookFoundBySearch: Book[] = [];
  bookName: string=" ";
  books: any;

  

  constructor(private bookService: BookService,
    private router: Router) { }
    
    searchByName(){
      this.bookService.findByName(this.bookName)
      .subscribe(
        data =>{
         this.books=data;
         console.log(data);
        },
        error=>{
          console.log(error);
        });
      }

/* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBooksList().subscribe(data => {
      this.books = data;

      //int num[]
      //int num1[]
      //num = num1
    });
  }

  getBookById(bookId: number){
    this.router.navigate(['book-details', bookId]);
  }

  updateBookDetails(bookId: number){
    this.router.navigate(['update-bookdetails', bookId]);
  }

  deleteBook(bookId: number){
    this.bookService.deleteBook(bookId).subscribe( data => {
      console.log(data);
      this.getBooks();
    })
  }
   conFirmDelete(book:Book){
    var status=confirm("you want to delete this record?");
    if(status==true){
      this.deleteBook(book.bookId);
    }
    else{
      this.getBooks();
      
    }
  }
  removeAllbook():void{
    this.bookService.deleteAll().subscribe(
    data =>{
      console.log(data);
      this.getBooks();
    },
    error => {
      console.log(error);

    });
    
  }

  

  confirmRemove(){
    var status= confirm("Are you sure want to remove all record you cannot retrive again?");
     if (status==true) {
      this.removeAllbook();
      
       
     }
     else{
      return;
     }
  
    }
    fetchTechnicalBooks(){
      this.bookService.findByTechnicalBooks().subscribe(
        data => {
          this.books = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    fetchFanstacyBooks(){
      this.bookService.findByFantacyBooks().subscribe(
        data => {
          this.books = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    fetchInspirationalBooks(){
      this.bookService.findByInspirationalBooks().subscribe(
        data => {
          this.books = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    fetchComedyBooks(){
      this.bookService.findByComedyBooks().subscribe(
        data => {
          this.books = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
}