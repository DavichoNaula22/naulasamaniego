import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./Views/books-list/books-list.component').then(m => m.BooksListComponent)
  },
  {
    path: 'books/:id',
    loadComponent: () => 
      import('./Views/book-detail/book-detail.component').then(m => m.BookDetailComponent)
  },
  {
    path: 'not-found/:id',
    loadComponent: () => 
      import('./Views/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];