import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from 'angular2-toaster';

import {common} from '../../i18n/en';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading = false;
  _Object;

  constructor(private toasterService: ToasterService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
    this._Object = Object;
  }

  submitForm() {
    if (!this.form.invalid) {

      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;

        if (this.authService.login({email: this.form.value['email'], password: this.form.value['password']})) {
          this.toasterService.pop('success', common.login_success);
          this.router.navigate(['/system']);
        } else {
          this.toasterService.pop('error', common.login_error);
        }
      }, 1000);
    }
  }

  getErrors(errors: any): any {
    console.log('errors', errors, {...errors} === {...errors});
    return errors;
  }
}
