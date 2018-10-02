import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from 'angular2-toaster';

import {common} from '../../i18n/en';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  constructor(private toasterService: ToasterService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  submitForm() {
    if (!this.form.invalid) {

      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        let message;
        let typeMessage;

        if (this.authService.login({email: this.form['email'], passsword: this.form['password']})) {
          message = common.login_success;
          typeMessage = 'success';
        } else {
          message = common.login_error;
          typeMessage = 'error';
        }

        this.toasterService.pop(typeMessage, message);
      }, 1000);
    }
  }
}
