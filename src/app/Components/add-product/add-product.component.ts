// add-product.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  template: `
    
  `,
  standalone: true,
  imports: [IonicModule]
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      productImage: ['assets/images/default-product.jpg'],
      barcodeImage: ['assets/images/default-barcode.png']
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.modalCtrl.dismiss(this.productForm.value);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}