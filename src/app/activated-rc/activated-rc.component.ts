import {Component, OnInit} from '@angular/core';
import {CanActivate} from '@angular/router';

@Component({
  selector: 'app-activated-rc',
  template: ``,
  styles: []
})
export class ActivatedRcComponent implements CanActivate {

  constructor() {
  }

  canActivate(): boolean {
    return true;
  }
}
