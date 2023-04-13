import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { useComponent } from './user/user.component';
import { aboutComponent } from './about/about.component';
import { userDetailsComponent } from './user/userDetails.Component';
import { pageNotFoundComponent } from './pageNotFound/pageNotFound.Component';
import { aboutCompanyComponent } from './about/aboutCompany.component';
import { aboutMeComponent } from './about/aboutMe.component';
import { LoginComponent } from './user-module/login/login.component';
const routes: Routes = [{
  path: 'user',
  component: useComponent,
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'about',
  component: aboutComponent,
  children: [{
    path: 'company',
    component: aboutCompanyComponent
  },
  {
    path: 'me',
    component: aboutMeComponent
  }]
},
{
  path: 'user/:id',
  component: userDetailsComponent
},
{
  path: '**',
  component: pageNotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
