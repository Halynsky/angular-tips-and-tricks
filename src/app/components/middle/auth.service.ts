import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isAuthenticated() {
    return true;
  }

  hasRole(role: string) {
    return false
  }


}