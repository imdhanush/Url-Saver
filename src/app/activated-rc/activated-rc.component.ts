import {Component, OnInit} from '@angular/core';
import {CanActivate} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-activated-rc',
  template: ``,
  styles: []
})
export class ActivatedRcComponent implements CanActivate {

  constructor(private cookieS: CookieService) {
  }

  canActivate(): boolean {
    return !!this.cookieS.get('uuid');
  }
}
