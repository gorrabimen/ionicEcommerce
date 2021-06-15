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
      icon: 'basket-outline'
    },
    {
      title: 'Catégories',
      url: '/tabs/categories',
      icon: 'grid-outline'
    },


    {
      title: 'Offres',
      url: '/tabs/tab2',
      icon: 'gift-outline'
    },]

    const filterTabs = () => this.authService.isAdmin() ? [
      {
        title: 'Dashboard',
        url: '/admin',
        icon: 'home-outline'
      },
      {
        title: 'Products',
        url: '/admin/products',
        icon: 'albums-outline'
      },
      ...userPages()
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
