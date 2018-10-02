import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LaddaModule} from 'angular2-ladda';
import {RouterModule} from '@angular/router';
import {NgReduxModule} from '@angular-redux/store';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormErrorsComponent} from './components/form-errors/form-errors.component';
import {OperatorCardComponent} from './components/operator-card/operator-card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LaddaModule,
    RouterModule,
    NgReduxModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent,
    OperatorCardComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent,
    LaddaModule,
    OperatorCardComponent,
    RouterModule,
    NgReduxModule
  ]
})
export class SharedModule {
}
