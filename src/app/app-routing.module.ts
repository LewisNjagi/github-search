import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchUserComponent } from './search-user/search-user.component';


const routes: Routes = [
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'search-user', component: SearchUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
