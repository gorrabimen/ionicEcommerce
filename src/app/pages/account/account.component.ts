import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  modeUpdate = false
  constructor(private modalController: ModalController,
    private menuController: MenuController,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() { }
  updateMode() {
    this.modeUpdate = !this.modeUpdate
  }
}
