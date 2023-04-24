import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  updateBook(id: number, book: Book) {
    throw new Error('Method not implemented.');
  }
/* passing the base url from front end to backend*/
  private baseURL = "http://localhost:8080/Restapi/books";

  constructor(private httpClient: HttpClient) { }
  
  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,book);
  }

  getBookById(bookId: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }

  updateBookDetails(bookId: number, book:Book): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${bookId}`, book);
  }

  //localhost:4200/delete/5
  deleteBook(bookId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${bookId}`);
  }
  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(bookName : any): Observable<Book[]>{
   return this.httpClient.get<Book[]>(`${this.baseURL}?bookName=${bookName}`);
  }
  findByTechnicalBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyTechnical`);
  }
  findByFantacyBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyFantacy`);
  }
  findByInspirationalBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyInspirational`);
  }
  findByComedyBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyComedy`);
  }
}                                                                                                                           