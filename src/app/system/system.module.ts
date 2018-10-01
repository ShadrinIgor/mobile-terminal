import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule
  ],
  declarations: [MainComponent, FormComponent]
})
export class SystemModule { }
