import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'products',
            component: ProductsComponent
          }
        ]
      }
    ])
  ],
  declarations: [AdminComponent, ProductsComponent]
})
export class AdminModule { }
