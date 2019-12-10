import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {HomepageComponent} from './homepage/homepage.component';


const routes: Routes = [
  {path: '', component: LoginpageComponent},
  {path: 'home', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
