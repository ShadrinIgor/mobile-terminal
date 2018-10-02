import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {AuthService} from './shared/services/auth.service';
import {LocalStoreService} from './shared/services/localStore.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToasterModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ToasterService,
    AuthService,
    LocalStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
