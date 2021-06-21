import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/guard.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private modalController: ModalController,
    private menuController: MenuController,
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router) { }

    userId : string="";
  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.getUserById()
  }

  userForm: any = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    mobile: ""
  }

  getUserById() {
    
    this.adminService.getUserById(this.userId)
      .subscribe(res => {
        console.log("user profile response :", res);
        this.userForm = res
      }, err => {
        console.error("error : ", err);
      })
  }
  
  submit(){
    this.adminService.updateUserById(this.userId,this.userForm)
    .subscribe(res => {
      console.log("user profile response :", res);
      this.userForm = res
    }, err => {
      console.error("error : ", err);
    })
  }
}
