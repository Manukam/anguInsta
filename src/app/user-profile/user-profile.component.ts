import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationCancel } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  access_token: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capture the access token and code
  this.route
  .queryParams
  .subscribe(params => {
      this.access_token = params['#'];
      // this.code = params['code'];
  });

// do something with this.code and this.accesstoken
console.log(this.access_token);
  }

}
