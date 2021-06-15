import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';
import { environment } from 'src/environments/environment';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,
    private menuController: MenuController,
    private authService: AuthService,
    private pagesService: PagesService,
    private http: HttpClient) {
    if (this.authService.isAuthenticated()) { this.goToHome(); }
  }

  userForm: any = {
    email: "",
    password: ""
  }

  ngOnInit() { }

  goToHome() {
    this.router.navigate(['/tabs/tab1']);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  submit() {
    console.log("userForm : ", this.userForm)
    var validForm: boolean = true
    Object.keys(this.userForm).map(key => {
      if (!this.userForm[key]) {
        validForm = false
      }
    });
    if (validForm) {
      this.http.post(environment.apiUrl + "/user/login", this.userForm)
        .subscribe((response: any) => {
          if (response && !response.error) {
            console.log("response : ", response);
            localStorage.setItem("userId", response._id);
            localStorage.setItem("loggedIn", "1");
            console.log('Vous êtes connecté avec succès.');
            this.menuController.enable(true);
            if (response.role == "user") {
              this.pagesService.getPages()
              localStorage.setItem("role", response.role)
              this.goToHome();
            } else if (response.role == "admin") {
              localStorage.setItem("role", response.role)
              this.pagesService.getPages()
              this.goToAdmin();
            }
          } else if (response && response.Error == 400) {
            console.error(`Veuillez saisir des informations valides.`);
          } else {
            console.error("Quelque chose s'est mal passé.");
          }
        }, err => {
          console.error("Quelque chose s'est mal passé.");
        })
    } else {
      console.error(`Veuillez saisir des informations valides.`);
    }
  }
}

