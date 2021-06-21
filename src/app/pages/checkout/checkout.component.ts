/**
 * Checkout Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  steps: any = [];
  cards: any = [];
  orderForm: FormGroup;

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService
  ) {
    this.steps.map(x => x.isSelected = false)
    this.steps[0] = true
    this.createOrderForm();
  }


  ionViewDidEnter() {
    console.log("prods :", this.storageService.cartProducts);
    if (this.storageService.cartProducts || this.storageService.cartProducts.length) {

      this.orderForm.patchValue({
        price: this.getTotal()
      });
    } else {
      this.router.navigate(['/tabs/cart']);
    }
  }

  createOrderForm() {
    this.orderForm = this.formBuilder.group({
      address: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required],
      price: [0, Validators.required],
      products: [[], Validators.required],
      user: [localStorage.getItem('userId'), Validators.required],
    });
  }

  getTotal() {
    return this.storageService.cartProducts.reduce(
      (accumulateur, valeurCourante) => accumulateur + valeurCourante.price * valeurCourante.quantity, 0
    );
  }

  ngOnInit() {
    // Checkout steps
    this.steps = [
      {
        step: "Billing",
        isSelected: true
      },
      {
        step: "Confirm",
        isSelected: false
      }
    ]
  }

  // Go to xext section function
  next() {
    console.log("this.storageService.cartProducts.length :",this.storageService.cartProducts.length);
    
    if (this.storageService.cartProducts && this.storageService.cartProducts.length !=0) {
      // If current section is billing then next payment section will be visible
      if (this.steps[0].isSelected) {
        this.steps[0].isSelected = false;
        this.steps[1].isSelected = true;
      }
    } else {
      this.router.navigate(['/cart']);
    }
  }

  // Go to order page function
  gotoOrderPage() {
    localStorage.removeItem('_cap_my-cart')
    this.storageService.clear()
    this.router.navigate(['/tabs/orders']);
  }

  // Go to product page
  gotoProductsPage() {
    localStorage.removeItem('_cap_my-cart')
    this.storageService.clear()
    this.router.navigate(['/tabs/products']);
  }

  // Back to previous screen
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }

}
