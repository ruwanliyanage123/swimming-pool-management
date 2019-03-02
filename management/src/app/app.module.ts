import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './core/auth/auth.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './signup-login/login/login.component';
import {SignupComponent} from './signup-login/signup/signup.component';
import {UserSignInUpModule} from './signup-login/user-signin-up.module';
import {HomeComponent} from './home/home.component';
import {MatButtonModule} from '@angular/material';
import {ButtonsModule, CarouselModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ContactComponent} from './contact-component/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    UserSignInUpModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ButtonsModule,
    MatButtonModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
