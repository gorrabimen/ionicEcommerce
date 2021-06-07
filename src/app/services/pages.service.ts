import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getPages() {
    return [
      {
        title: 'Accueil',
        url: '/tabs/tab1',
        icon: 'home'
      },
      {
        title: 'Catégories',
        url: '/tabs/categories',
        icon: 'grid'
      },
     
      
      {
        title: 'Offres',
        url: '/tabs/tab2',
        icon: 'gift'
      },
      {
        title: 'Favorise',
        url: '/tabs/tab3',
        icon: 'heart'
      },
      {
        title: 'Notification',
        url: '/tabs/tab4',
        icon: 'notifications-outline'
      },
      {
        title: 'Caisse',
        url: '/checkout',
        icon: 'checkbox'
      },
      {
        //title: 'details',
        //url: '/details',
        //icon: 'checkmark-circle-outline'
      },
      {
        //title: 'Cart',
         //url: '/cart',
         //icon: 'cart'
       },
       {
        //title: 'Search',
        //url: '/tabs/search',
        //icon: 'search'
      },
       {
        //title: 'Magasin',
        //url: '/tabs/products',
        //icon: 'basket'
      },
    ];
  }
}
