import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {LaddaModule} from 'angular2-ladda';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    BrowserModule,
    ToasterModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    LaddaModule.forRoot({style: 'zoom-out'}),
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
