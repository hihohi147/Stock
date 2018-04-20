import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path:'bienvenue', component:BienvenueComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
