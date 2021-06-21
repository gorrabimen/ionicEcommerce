
/**
 * Cart Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  cartProducts: Product[] = [];
  total: number = 0;

  constructor(public modalController: ModalController,
    public storageService: StorageService,
    private router: Router
  ) { }

  ionViewDidEnter() {
    this.getCartItems();
  }

  // Get Cart Items From Storage
  getCartItems() {
    this.storageService.getObject('my-cart').then((products) => {
      if(products && products.length){
        this.cartProducts = products;
        for (var i = 0; i < this.cartProducts.length; i++) {
          this.cartProducts[i].quantity = 1;
        }
        this.total =this.getTotal();
      }else{
        this.cartProducts = []
      }
    });
  }

  // Minus Product Quantity
  minusQuantity(product, index) {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      this.total = this.getTotal()
    }
  }

  // Add More Quantity
  addQuantity(product, index) {
    if (product.quantity) {
      product.quantity = product.quantity + 1;
    } else {
      product.quantity = 1;
      product.quantity = product.quantity + 1;
    }
    this.total = this.getTotal()
  }

  getTotal() {
    return this.cartProducts.reduce(
      (accumulateur, valeurCourante) => accumulateur + valeurCourante.price * valeurCourante.quantity, 0
    );
  }

  // Remove Product From Cart
  async removeProduct(product, index) {
    this.cartProducts.splice(index, 1);
    await this.storageService.removeStorageValue(product.id, 'my-cart');
    await this.getCartItems();
    this.total = this.getTotal()
  }

  // Go to checkout page
  async goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  // Back to previous page options
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
}
