import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  auth(){
    let obj={"name":"Imen","email":"iengoraab@gmail.com","isAdmin":true}
      localStorage.setItem("user",JSON.stringify(obj))
      console.log('effectué .....')
localStorage.setItem('loggedIn','1')

}
}

