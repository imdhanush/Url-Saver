import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  loginEvent(email: string, password: string) {
    console.log(email, password);
  }

}
