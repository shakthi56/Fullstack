import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-bookdetails.component.html',
  styleUrls: ['./update-bookdetails.component.css']
})
export class UpdateBookDetailsComponent implements OnInit {

  id: number = 0;
  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }
    /* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/

  ngOnInit(): void {
    this.id = this.route.snapshot.params['bookId'];

    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.bookService.updateBookDetails(this.id, this.book).subscribe( data =>{
      this.goToBookList();
    }, error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  confirmUpdated(){
    var status = confirm("your record updated successfully!");
    if(status==true){
      this.bookService.updateBookDetails(this.id, this.book).subscribe( data =>{
        this.goToBookList();
      }
      , error => console.log(error));
    }
    else{
      this.router.navigate(['/books']);
    }
}

}

