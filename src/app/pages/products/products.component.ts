/**
 * Product Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FilterComponent } from '../filter/filter.component';
import { GetApiService } from 'src/app/get-api.service';
import { AuthService } from 'src/app/services/guard.service';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    public modalController: ModalController) { }
    
  ngOnInit(): void {
  }

  // Go to product details page
  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }

  // Open Filter page
  async openFilterPage() {
    const modal = await this.modalController.create({
      component: FilterComponent
    });
    return await modal.present();
  }

  // One column view function
  showOneColumn() {
    this.oneColumn = true;
    this.grid = false
    this.list = false;
  }

  // Grid view function
  showGrid() {
    this.grid = true;
    this.oneColumn = false;
    this.list = false;
  }

  // List view function
  showList() {
    this.list = true;
    this.grid = false;
    this.oneColumn = false;
  }

}
