import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormErrorsComponent} from './components/form-errors/form-errors.component';
import {LaddaModule} from 'angular2-ladda';
import {ToasterModule} from 'angular2-toaster';
import { OperatorCardComponent } from './components/operator-card/operator-card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LaddaModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent,
    OperatorCardComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent,
    LaddaModule,
    OperatorCardComponent
  ]
})
export class SharedModule {
}
