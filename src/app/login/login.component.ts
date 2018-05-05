import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CustomMaterialModule } from '../core/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
