import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { aboutComponent } from './about/about.component';
import { welcomeComponent } from './welcome/welcome.Component';
import { HttpClientModule } from '@angular/common/http';
import { UserModuleModule } from './user-module/user-module.module';


@NgModule({
  declarations: [
    AppComponent,
    aboutComponent,
    welcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModuleModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
