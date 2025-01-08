import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/book.service'; // Corregido aquí
import { IProduct } from '../../Models/book.model';

@Component({
  selector: 'app-book-detail',
  template: `
    
  `,
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BookDetailComponent implements OnInit {
  product?: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService // Corregido aquí también
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      const product = this.bookService.getProductById(id);
      
      if (!product) {
        this.router.navigate(['/not-found', id]);
      } else {
        this.product = product;
      }
    });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}