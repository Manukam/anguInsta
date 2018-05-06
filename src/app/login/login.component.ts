import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CustomMaterialModule } from '../core/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  CLIENT_ID = '691be925f1f744a4aae80e519a1a6d51';
  REDIRECT_URL = 'http://localhost:4200/profile?';

  ngOnInit() {
  }

  login(): void {
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id='
    + this.CLIENT_ID + '&redirect_uri=' + this.REDIRECT_URL + '&response_type=token';
    // this.router.navigate(['/#access_token/']);
  }

}
