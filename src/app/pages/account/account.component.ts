import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  modeUpdate=false
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  updateMode(){
    this.modeUpdate=!this.modeUpdate
  }
}
