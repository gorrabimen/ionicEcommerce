import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // Get List of Products
  products: any = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getProducts();
  }


  getCategories() {
    return this.http.get(environment.apiUrl + "/category");
  }

  getProducts() {
    this.http.get(environment.apiUrl + "/product")
      .subscribe((response: any) => {
        if (response && !response.error) {
          console.log("response : ", response);
          this.products = response;
        }
      });
  }

  createCategory(formData) {
    return this.http.post(environment.apiUrl + "/category/save", formData);
  }

  createProduct(formData) {
    return this.http.post(environment.apiUrl + "/product/save", formData)
  }

  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }

}
