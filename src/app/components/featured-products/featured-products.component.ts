import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../../pages/product-details/product-details.component';
import { GetApiService } from 'src/app/get-api.service';
import { AdminService } from 'src/app/pages/admin/admin.service';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };

  constructor(
    private adminService: AdminService,
    private modalController: ModalController, private api: GetApiService) { }

  ngOnInit() {
    this.api.apiCall().subscribe((data: any[]) => {
      console.warn('get api data', data);
    })
  }

  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }

}
