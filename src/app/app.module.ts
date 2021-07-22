import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedsquareComponent } from './components/redsquare/redsquare.component';
import { BluecircleComponent } from './components/bluecircle/bluecircle.component';

@NgModule({
  declarations: [
    AppComponent,
    RedsquareComponent,
    BluecircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
