import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { User } from '../_DAO/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user;
  constructor(private route: Router, private auth: AuthService) {
    this.user = new User(0, '', '');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    this.auth.SignIn(this.user).then((res) => {
      console.log(res);
      this.route.navigate(['admin']);
      /*      if (res.user.email === 'admin@gmail.com') {
              this.route.navigate(['admin']);
            } else if (res.user.email === 'consultor@gmail.com') {
              this.route.navigate(['consultor']);
            } else {
              this.route.navigate(['home']);
            }
            */
    }).catch(err => console.log('err', err));

  }
}
