/**
 * Product Details Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  @Input() _id: number;
  @Input() name: String;
  @Input() description: String;
  @Input() price: number;
  @Input() imageUrl: string;
  @Input() discountPrice: number = 0;
  @Input() images: Array<String>;
  @Input() size: Array<String>;
  @Input() color: Array<String>;
  @Input() isWishlist: boolean;

  products:any;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    loop: true,
    autoplay: true,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  constructor(public router: Router,
    private storageService: StorageService,
    private authService: AuthService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  // Add to Cart Function
  addToCart() {
    this.products = {
      _id: this._id,
      name: this.name,
      imageUrl: this.imageUrl,
      description: this.description,
      price: this.price,
      discountPrice: 0,
      quantity: 1,
    }

    // Save cart product in storage
    this.storageService.setObject(this.products, 'my-cart');
    this.dismiss();
  }

  // Go to cart page
  async gotoCartPage() {
    this.dismiss();
    this.router.navigate(['/cart']);
  }

  async goSignIn() {
    this.dismiss();
    this.authService.signout();
  }

  // Back to previous page function
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
