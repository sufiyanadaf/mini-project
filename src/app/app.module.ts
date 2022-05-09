import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/Abilities/left-nav-bar.component';
import { BodyComponent } from './body/profile/body.component';
import { FooterComponent } from './footer/Introduction/footer.component';
import { LeftNavigationBarComponent } from './left-navigation-bar/Contact/left-navigation-bar.component';
import { RightNavBarComponent } from './right-nav-bar/Features/right-nav-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    BodyComponent,
    FooterComponent,
    LeftNavigationBarComponent,
    RightNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
