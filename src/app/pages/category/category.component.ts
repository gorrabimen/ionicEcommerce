
/**
 * Category Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/guard.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  oneColumn: Boolean = true;
  list: Boolean = false;

  constructor(private router: Router,
    private authService: AuthService,
    private adminService: AdminService) { }

  ngOnInit() {
    this.getCategories();
  }

  // Get list of categories
  categories: any = [];
  getCategories() {
    this.adminService.getCategories()
      .subscribe((response: any) => {
        if (response && !response.error) {
          console.log("response : ", response);
          this.categories = response;
        }
      }, (err: any) => {
        console.error("Quelque chose s'est mal passé.");
      });
  }

  // One column view function
  showOneColumn() {
    this.oneColumn = true;
    this.list = false;
  }

  // Grid view function
  showGrid() {
    this.oneColumn = false;
    this.list = false;
  }

  // List view function
  showList() {
    this.list = true;
    this.oneColumn = false;
  }

  // Go to cart page function
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }
}
