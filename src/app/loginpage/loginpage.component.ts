import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';

interface LoginData {
  login: boolean;
  uuid: string;
}

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private service: ApiServeService) {
  }

  ngOnInit() {

  }

  loginEvent(email: string, password: string) {
    this.service.loginAction(email, password).subscribe((e: LoginData) => {
      if (e.login) {
        document.cookie = `uuid = ${e.uuid}`;
        console.log('Cookie set');
      } else {
        document.cookie = `uuid = ''`;
      }
    });
  }

}
