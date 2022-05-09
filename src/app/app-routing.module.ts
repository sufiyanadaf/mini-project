import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/profile/body.component';
import { FooterComponent } from './footer/Introduction/footer.component';
import { LeftNavBarComponent } from './left-nav-bar/Abilities/left-nav-bar.component';
import { LeftNavigationBarComponent } from './left-navigation-bar/Contact/left-navigation-bar.component';
import { RightNavBarComponent } from './right-nav-bar/Features/right-nav-bar.component';

const routes: Routes = [
  {path: 'body' , component : BodyComponent},
  {path: 'left-nav-bar' , component : LeftNavBarComponent},
  {path: 'footer' , component : FooterComponent},
  {path: 'left-navbar' , component : LeftNavBarComponent},
  {path: 'left-navigation-bar' , component : LeftNavigationBarComponent},
  {path: 'right-nav-bar' , component : RightNavBarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
