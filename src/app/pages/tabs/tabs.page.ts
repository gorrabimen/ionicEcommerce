import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private menuController: MenuController,
    private authService: AuthService
    ) {}
  }