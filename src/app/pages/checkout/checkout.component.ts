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

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  steps: any = [];
  cards: any = [];

  constructor(public modalController: ModalController,
    private router: Router,
    private storageService: StorageService
  ) { }

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
    // If current section is billing then next payment section will be visible
    if (this.steps[0].isSelected) {
      this.steps[0].isSelected = false;
      this.steps[1].isSelected = true;
    }
    // If current section is Billing then next section confirm will be visible 
    // else if (this.steps[1].isSelected) {
    //   this.steps[0].isSelected = false;
    //   this.steps[1].isSelected = false;
    //   this.steps[2].isSelected = true;
    // }
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
