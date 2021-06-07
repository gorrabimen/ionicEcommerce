import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../../pages/product-details/product-details.component';
import {Produit}from 'src/app/models/produit'
import { GetApiService } from 'src/app/get-api.service';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  elements:Produit[]=[{id:1,
  type:'',
  description:'',
  condition:'',
  title:'',
  categorie:'',
  production:'',
  price:''}]


  products: Product[];

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };

  constructor(private productsService: ProductsService,
    private modalController: ModalController,private api:GetApiService) { }

  ngOnInit() {
    this.getProductList();
  
  
    this.api.apiCall().subscribe((data:any[])=>{
      console.warn('get api data',data);
    })
  }
  getProductList() {
    this.products = this.productsService.productList();
  }

  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }

}
