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
import {MatButtonModule, MatDialogModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {ButtonsModule, CarouselModule, MDBBootstrapModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ContactComponent} from './contact-component/contact.component';
import {CalendarModule,DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {EventCalComponent} from './event-cal/event-cal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FlatpickrModule} from 'angularx-flatpickr';
import {ServicesModule} from './services/services.module';
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';
import { ButtonWaterComponent } from './shared/button-water/button-water.component';
import {SharedModule} from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    ContactComponent,
    EventCalComponent,
    ButtonWaterComponent
   
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
    NavbarModule,
    AngularFireAuthModule,
    NavbarModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ServicesModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDialogModule,
    DlDateTimePickerDateModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
