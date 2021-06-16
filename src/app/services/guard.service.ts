import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private menuController: MenuController,
    private router: Router) { }

  isAuthenticated(): boolean {
    let indicator = localStorage.getItem("loggedIn");
    let userId = localStorage.getItem("userId");

    if (indicator == '1' && userId)
      return true
    return false
  }

  isAdmin(): boolean {
    if (this.isAuthenticated()) {
      let role = localStorage.getItem("role");
      if (role == "admin") return true
    }
    return false;
  }

  signout() {
    // localStorage.setItem("loggedIn", '-1')
    // localStorage.removeItem("userId")
    localStorage.clear();
    this.router.navigate(['/signin']);
    this.menuController.enable(false); // Make Sidemenu disable
  }

  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }

}