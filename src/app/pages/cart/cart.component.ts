
/**
 * Cart Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  
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
        this.storageService.cartProducts = products;
        for (var i = 0; i < this.storageService.cartProducts.length; i++) {
          this.storageService.cartProducts[i].quantity = 1;
        }
        this.total =this.getTotal();
      }else{
        this.storageService.cartProducts = []
      }
    });
  }

  // Minus Product Quantity
  minusQuantity(product, index) {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      this.total = this.getTotal()
      // this.storageService.setObject(this.storageService.cartProducts, 'my-cart');
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
    // this.storageService.setObject(this.storageService.cartProducts, 'my-cart');
  }

  getTotal() {
    return this.storageService.cartProducts.reduce(
      (accumulateur, valeurCourante) => accumulateur + valeurCourante.price * valeurCourante.quantity, 0
    );
  }

  // Remove Product From Cart
  async removeProduct(product, index) {
    this.storageService.cartProducts.splice(index, 1);
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
