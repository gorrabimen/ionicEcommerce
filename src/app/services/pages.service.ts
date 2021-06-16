import { AuthService } from './guard.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private authService: AuthService) { this.getPages() }
  appPages

  getPages() {

    const userPages = () => [{
      title: 'Acceuil',
      url: '/tabs/tab1',
      icon: 'planet-outline'
    },
    {
      title: 'Catégories',
      url: '/tabs/categories',
      icon: 'grid-outline'
    },
    {
      title: 'Produits',
      url: '/tabs/produits',
      icon: 'basket-outline'
    }];

    const filterTabs = () => this.authService.isAdmin() ? [
      ...userPages(),
      {
        title: 'Dashboard',
        url: '/admin',
        icon: 'settings-outline'
      }
    ] : userPages();

    this.appPages = filterTabs();
    // = [
    //   ...filterTabs(),

    //   // {
    //   //   title: 'Favorise',
    //   //   url: '/tabs/tab3',
    //   //   icon: 'heart'
    //   // },
    //   // {
    //   //   title: 'Caisse',
    //   //   url: '/checkout',
    //   //   icon: 'checkbox'
    //   // },

    //   //  {
    //   //   //title: 'Magasin',
    //   //   //url: '/tabs/products',
    //   //   //icon: 'basket'
    //   // },
    // ];
  }
}
