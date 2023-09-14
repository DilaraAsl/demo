import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './demo/first/first.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { LeftComponent } from './left/left/left.component';
import { RightComponent } from './right/right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
    SidebarComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
