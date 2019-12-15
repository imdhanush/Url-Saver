import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {HomepageComponent} from './homepage/homepage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';
import {
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRcComponent} from './activated-rc/activated-rc.component';
import {counterReducer, mediumReducer} from './medium.reducer';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    ActivatedRcComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({state: mediumReducer, idCount: counterReducer}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    CookieService,
    ActivatedRcComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
