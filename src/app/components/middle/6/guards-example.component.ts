import { Component, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    return this.authService.isAuthenticated();
  }
}

@Injectable()
export class CanActivateAdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    return this.authService.hasRole('ADMIN');
  }
}

@Component({
  selector: 'guard-admin-example-comp',
  template: '<div><a routerLink="user">USER</a></div>' +
            '<div><a routerLink="admin">ADMIN</a></div>'
})
export class GuardsExampleComponent {
}

@Component({
  selector: 'guard-example-comp',
  template: '<div class="heroes-wrapper">I am USER</div>'
})
export class GuardsUserExampleComponent {
}

@Component({
  selector: 'guard-admin-example-comp',
  template: '<div class="heroes-wrapper">I am ADMIN</div>'
})
export class GuardsAdminExampleComponent {
}


