import { Book } from './../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newBookTitle : string = "";
  newBookAuthor : string = "";
  books: Book[] = [];
  
  ngOnInit(): void {
    this.getBooks()
  }

  addBook() {
    if (this.newBookAuthor.trim().length && this.newBookTitle.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      }
      this.books.push(newBook);
      this.newBookTitle = "";
      this.newBookAuthor = "";
      localStorage.setItem('books', JSON.stringify(this.books));
    }    
  }

  getBooks() {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks? JSON.parse(savedBooks): [];
  }

  deleteBook(idx:number) {
    this.books.splice(idx, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

}
