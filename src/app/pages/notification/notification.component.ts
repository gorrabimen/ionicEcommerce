/**
 * Notification Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notifications: any = [
    {
      title: "Contrary to popular belief",
      message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "15/15/2021",
      status: false,
    },
    {
      title: "Contrary to popular belief",
      message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "15/4/2021",
      status: false
    },
    {
      title: "Contrary to popular belief",
      message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "15/20",
      status: true
    },
    {
      title: "Contrary to popular belief",
      message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "15/2/2021",
      status: true
    },
    {
      title: "Contrary to popular belief",
      message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "15/13/2021",
      status: true
    },
    {
      title: "Contrary to popular belief",
      message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "15/06/2021",
      status: true
    },
  
  ];

  constructor(private notificationsService: NotificationsService,
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
    //this.getNotification();
  }

  // Get list of notification
  getNotification() {
    this.notifications = this.notificationsService.getNotifications();
  }

  // Go to cart page
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }
}
