import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
/*these methods are converting front end to backend by base url .In backend there is a cross origin and search for the respective mappings*/

export class BookDetailsComponent implements OnInit {

  bookId: number = 0;
  book: any = [];
  constructor(private route: ActivatedRoute, private bookService: BookService) { }
 /* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.*/
  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];

    this.book = new Book();
    this.bookService.getBookById(this.bookId).subscribe( data => {
      this.book = data;
    });
  }

  

}
