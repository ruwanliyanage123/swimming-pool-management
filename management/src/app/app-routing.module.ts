import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './signup-login/login/login.component';
import {SignupComponent} from './signup-login/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact-component/contact.component';
import {EventCalComponent} from './event-cal/event-cal.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'book', component: EventCalComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
