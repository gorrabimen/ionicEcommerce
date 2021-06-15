import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsComponent } from '../../products/products.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
        children: [
          // {
          //   path: 'products',
          //   component: ProductsComponent
          // }
        ]
      }
    ])
  ],
  declarations: [ProductsComponent]
})
export class AdminProductsModule { }
