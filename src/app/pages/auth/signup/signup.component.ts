import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }

  userForm: any = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    mobile: ""
  }

  ngOnInit() { }

  goToSignIn() {
    this.router.navigate(['/signin']);
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
      this.http.post(environment.apiUrl + "/user/register", this.userForm)
        .subscribe(response => {
          console.log("response : ", response)
          alert('Compte créé avec succès.')
          this.goToSignIn();
        }, err => {
          console.error("Quelque chose s'est mal passé.")
        })
    } else {
      alert(`Veuillez saisir des informations valides.`)
    }
  }

}
