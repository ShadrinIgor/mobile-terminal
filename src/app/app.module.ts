import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToasterModule,
    AppRoutingModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
