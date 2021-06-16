import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { AdminService } from 'src/app/pages/admin/admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {


  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

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
}
