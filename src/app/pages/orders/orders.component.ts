/**
 * Order Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    autoplay: true,
  };

  constructor(private aminService: AdminService) { this.getProducts(); }

  ionViewDidEnter() { this.getProducts(); }

  ngOnInit() { }

  // Orders
  orders: any = [];
  getProducts() {
    this.aminService.getOrders()
      .subscribe((response: any) => {
        if (response && !response.error) {
          console.log("response : ", response);
          this.orders = response.map(x => ({ date: new Date(x.createdAt).toLocaleDateString(), totalPrice: x.price }));
        }
      });
  }

}
