import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
   })
export class AuthService {
  public isAuthenticated(): boolean {
   let indicator = localStorage.getItem("loggedIn");
   let userId = localStorage.getItem("userId");

   if (indicator == '1' && userId)
     return true
   return false
  }
}