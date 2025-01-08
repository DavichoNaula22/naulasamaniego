// books-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookService } from '../../Services/book.service';
import { BookItemComponent } from '../../Components/book-item/book-item.component';
import { IProduct } from '../../Models/book.model';

@Component({
  selector: 'app-books-list',
  template: `
    
  `,
  standalone: true,
  imports: [CommonModule, IonicModule, BookItemComponent]
})
export class BooksListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  async openAddProductModal() {
    // Implementación del modal para añadir producto
  }
}