import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
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
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
