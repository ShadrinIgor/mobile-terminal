import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {MainComponent} from './main/main.component';
import {FormComponent} from './form/form.component';
import {SharedModule} from '../shared/shared.module';
import {SystemComponent} from './system.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    FormComponent,
    SystemComponent
  ]
})
export class SystemModule {
}
