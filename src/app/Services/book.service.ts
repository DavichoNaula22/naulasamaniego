// book.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../Models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private products: IProduct[] = [
    
    {
      id: 1,
      title: 'Proteína Whey',
      price: 29.99,
      description: 'Proteína de suero para apoyo en el desarrollo muscular.',
      productImage: 'assets/images/whey.jpg',
      barcodeImage: 'assets/images/barcode.png',
      stock: 10,
      category: 'Proteínas'
    },
    {
      id: 2,
      title: 'Creatina Monohidratada',
      price: 19.99,
      description: 'Suplemento para mejorar el rendimiento físico y la fuerza.',
      productImage: 'https://rightnutrition.com.ec/wp-content/uploads/2022/01/Creatina-Drive-300-Grams-600x600.jpg',
      barcodeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/800px-EAN13.svg.png',
      stock: 15,
      category: 'Rendimiento'
    },
    {
      id: 3,
      title: 'Omega 3',
      price: 14.99,
      description: 'Ácidos grasos esenciales para la salud cardiovascular.',
      productImage: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01648/y/48.jpg',
      barcodeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/800px-EAN13.svg.png',
      stock: 20,
      category: 'Salud'
    },
    {
      id: 4,
      title: 'BCAA',
      price: 24.99,
      description: 'Aminoácidos esenciales para la recuperación muscular.',
      productImage: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02036/l/48.jpg',
      barcodeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/800px-EAN13.svg.png',
      stock: 12,
      category: 'Recuperación'
    },
    {
      id: 5,
      title: 'Multivitamínico',
      price: 12.99,
      description: 'Vitaminas y minerales para el bienestar general.',
      productImage: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/msc/msc61017/y/24.jpg',
      barcodeImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/800px-EAN13.svg.png',
      stock: 8,
      category: 'Vitaminas'
    },
    
  ];

  private productsSubject = new BehaviorSubject<IProduct[]>(this.products);

  constructor() {}

  getProducts(): Observable<IProduct[]> {
    return this.productsSubject.asObservable();
  }

  getProductById(id: number): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Omit<IProduct, 'id'>): void {
    const newId = this.products.length > 0 ? 
      Math.max(...this.products.map(p => p.id)) + 1 : 1;
    
    const newProduct = {
      ...product,
      id: newId
    };

    this.products.push(newProduct);
    this.productsSubject.next(this.products);
  }

  updateProduct(product: IProduct): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      this.productsSubject.next(this.products);
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next(this.products);
  }
}
