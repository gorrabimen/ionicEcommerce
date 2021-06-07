
/**
 * Main App Components
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 * 
 */

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PagesService } from './services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private router: Router,
    private pagesService: PagesService
  ) {
    this.initializeApp();
  }
  isLoggedIn() {

    let indicator = localStorage.getItem("loggedIn");
    let userId = localStorage.getItem("userId");

    if (indicator == '1' && userId)
      return true
    return false
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Get Menus For Side Menu
      this.appPages = this.pagesService.getPages();
    });
  }

  // Signout Button
  signout() {
    localStorage.setItem("loggedIn", '-1')
    localStorage.removeItem("userId")
    this.router.navigate(['/signin']);
    this.menuController.enable(false); // Make Sidemenu disable
  }
  signin() {
    this.router.navigate(['/signin'])
  }
}
