import {NgModule, OnInit} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main.component';
import {AuthService} from '../shared/services/auth.service';
import {SystemComponent} from './system.component';

const routes: Routes = [{
  path: '',
  component: SystemComponent,
  children: [
    {path: '', component: MainComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
