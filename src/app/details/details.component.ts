import { Component, OnInit } from '@angular/core';
import { Client } from "../models/Client";
import { Administrateur } from "../models/administrateur"
import { User } from "../models/user";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  person: Administrateur = null
  client: Client = null
  user: User = null
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log('user : ', this.user)
    if (this.user)
      if (this.user.isAdmin) {
        this.person = new Administrateur()
        this.person.name = this.user.name
        this.person.firstname = this.user.email
      } else {
        this.client = new Client()
        this.client.name = this.user.name
        this.client.email = this.user.email






      }
  }

}
