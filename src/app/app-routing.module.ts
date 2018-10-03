import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'system',
  loadChildren: 'app/system/system.module#SystemModule'
},
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {path: '', redirectTo: 'system', pathMatch: 'full'}
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
