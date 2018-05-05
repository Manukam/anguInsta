import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';

const routes: Routes = [
    // { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    {path : '', component : LoginComponent}
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }