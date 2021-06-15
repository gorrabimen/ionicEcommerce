import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  steps: any = [];
  cards: any = [];

  constructor(
    private authService: AuthService,
    private pagesService: PagesService,
    public modalController: ModalController,
    private router: Router
  ) { }

  submit() {
    var step = this.steps.find(i => i.isSelected)
    if (step.name == "product") {

    } else if (step.name == "category") {

    } else if (step.name == "user") {

    }
  }

  next(type) {
    // If current section is billing then next payment section will be visible
    this.steps.map(x => x.isSelected = false);
    if (type == "product") {
      this.steps[0].isSelected = true;
    } else if (type == "category") {
      this.steps[1].isSelected = true;
    } else if (type == "user") {
      this.steps[2].isSelected = true;
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

  ngOnInit() {
    this.pagesService.getPages();
    // Checkout steps
    this.steps = [
      {
        line: 1,
        step: "Ajouter Produit",
        name: 'product',
        isSelected: true
      },
      {
        line: 2,

        step: "Ajouter Categorie",
        name: 'category',
        isSelected: false
      },
      {
        line: 3,
        step: "List Utilisateur",
        name: 'user',
        isSelected: false
      }
    ]

    // Payment cards images
    this.cards = ["assets/images/cards/visa.png",
      "assets/images/cards/mastercard.png",
      "assets/images/cards/paypal.png"]
  }

}
