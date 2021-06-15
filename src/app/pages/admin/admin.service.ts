import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(environment.apiUrl + "/category");
  }

  getProducts() {
    return this.http.get(environment.apiUrl + "/product");
  }
  
  createCategory(formData) {
    return this.http.post(environment.apiUrl + "/category/save", formData);
  }

  createProduct(formData) {
    return this.http.post(environment.apiUrl + "/product/save", formData)
  }
}
