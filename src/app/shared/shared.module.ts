import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormErrorsComponent} from './components/form-errors/form-errors.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent
  ]
})
export class SharedModule {
}
