import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';
import { PagesService } from 'src/app/services/pages.service';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  categories: any = [];
  steps: any = [
    {
      step: "Ajouter Un Produit",
      name: 'product',
      isSelected: true
    },
    {
      step: "Ajouter Une Category",
      name: 'category',
      isSelected: false
    }
  ];
  step = this.steps[0];
  productForm: FormGroup;
  categoryForm: FormGroup;

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    public formBuilder: FormBuilder,
    private pagesService: PagesService,
    public modalController: ModalController,
    private router: Router,
    public toastService: ToastService) {
    this.createProductForm();
    this.createCategoryForm();
    this.getCategories();
  }

  ngOnInit() {
    this.pagesService.getPages();
  }

  getCategories() {
    this.adminService.getCategories()
      .subscribe((response: any) => {
        if (response && !response.error) {
          console.log("response : ", response);
          this.categories = response;
        }
      }, (err: any) => {
        this.toastService.presentToast("Quelque chose s'est mal passé.");
      });
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      image: [null, Validators.required],
      category: ['', Validators.required]
    });
  }

  createCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  loadImageFromDevice(event) {
    console.log("file : ", event.target.files[0])
    if (this.step.name == "product") {
      this.productForm.patchValue({
        image: event.target.files[0]
      });
    } else if (this.step.name == "category") {
      this.categoryForm.patchValue({
        image: event.target.files[0]
      });
    };
  };

  checkValidity() {
    if (this.step.name == "product") if (this.productForm.invalid) return false;
    else if (this.step.name == "category") if (this.categoryForm.invalid) return false;
    return true
  }
  submit() {
    if (this.step.name == "product") {
      var formData = new FormData();
      Object.keys(this.productForm.value).map(key => {
        console.log("key : ", key)
        console.log("value : ", this.productForm.get(key).value);
        formData.append(key, this.productForm.get(key).value);
      });
      if (this.productForm.valid) {
        this.adminService.createProduct(formData)
          .subscribe((response: any) => {
            if (response && !response.error) {
              console.log("response : ", response);
              this.toastService.presentToast('Votre produit a été enregistré.');
              this.createProductForm();
            }
          }, err => {
            this.toastService.presentToast("Quelque chose s'est mal passé.");
          });
      }

    } else if (this.step.name == "category") {
      var formData = new FormData();
      Object.keys(this.categoryForm.value).map(key => {
        console.log("key : ", key)
        console.log("value : ", this.categoryForm.get(key).value);
        formData.append(key, this.categoryForm.get(key).value);
      });
      if (this.categoryForm.valid) {
        this.adminService.createCategory(formData)
          .subscribe((response: any) => {
            if (response && !response.error) {
              console.log("response : ", response);
              this.toastService.presentToast('Votre catégorie a été enregistrée.');
              this.createCategoryForm();
            }
          }, (err: any) => {
            this.toastService.presentToast("Quelque chose s'est mal passé.");
          });
      }
    };
  }

  next(type) {
    // If current section is billing then next payment section will be visible
    this.steps.map(x => x.isSelected = false);
    if (type == "product") {
      this.steps[0].isSelected = true;
      this.step = this.steps[0]
    } else if (type == "category") {
      this.steps[1].isSelected = true;
      this.step = this.steps[1]
    }
  }

  // Go to order page function
  gotoOrderPage() {
    this.router.navigate(['/tabs/orders']);
  }

  // Go to product page
  gotoProductsPage() {
    this.router.navigate(['/tabs/products']);
  }

  // Back to previous screen
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
}
