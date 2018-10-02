import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {LaddaModule} from 'angular2-ladda';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DevToolsExtension, NgRedux} from '@angular-redux/store';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {AuthService} from './shared/services/auth.service';
import {LocalStoreService} from './shared/services/localStore.service';
import {IAppState, INITIAL_STATE, rootReducer} from './shared/store/reducer/reducers';
import {Actions} from './shared/store/actions/actions';

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
    LocalStoreService,
    Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      null,
      devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
