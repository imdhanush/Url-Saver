import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

interface ResI {
  status: boolean;
  message: string;
  uuid: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service: ApiServeService, private cookieService: CookieService, private route: Router) {
  }

  ngOnInit() {
  }

  signupEvent(email: string, password: string) {
    this.service.signUp(email, password).subscribe((res: ResI) => {
      if (res.status) {
        this.cookieService.set('uuid', res.uuid);
        this.route.navigate(['']);
      } else {
        alert(res.message);
      }
    });
  }


}
