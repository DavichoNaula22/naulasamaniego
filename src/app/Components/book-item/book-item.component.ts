import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../Models/book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  route = inject(Router);
  @Input() item!: IProduct;

  navigateToDetail() {
    this.route.navigate(['books', this.item.id]);
  }
}