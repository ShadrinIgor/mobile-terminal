import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-system',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit', this.auth.isLogin());
    if (!this.auth.isLogin()) {
      this.router.navigate(['/login']);
    }
  }

}
