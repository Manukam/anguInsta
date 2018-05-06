import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
  // { path: '?code=', component: UserProfileComponent },
  {path: '**', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot(
      routes,
      {  } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
