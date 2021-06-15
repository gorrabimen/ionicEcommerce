import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AuthGuardService as AuthGuard 
} from '../../services/authgard.service';
// Tab Routes
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomeModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deal/deal.module').then(m => m.DealModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../wishlist/wishlist.module').then(m => m.WishlistModule)
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notification/notification.module').then(m => m.NotificationModule)
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountModule)
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../category/category.module').then(m => m.CategoryModule)
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../products/products.module').then(m => m.ProductsModule)
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orders/orders.module').then(m => m.OrdersModule)
          }
        ],canActivate: [AuthGuard]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
