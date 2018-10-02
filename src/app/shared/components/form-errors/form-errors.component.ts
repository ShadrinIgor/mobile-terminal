import {Component, Input, OnInit} from '@angular/core';

import formError from '../../../i18n/en/form.errors';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnInit {

  @Input() errors = {};
  listErrors: string[] = [];

  ngOnInit() {
    console.log('this.errors', this.errors);
    this.parseErrors();
  }

  parseErrors() {
    this.listErrors = Object.keys(this.errors).map((item: any) => {
      return formError[item] ? formError[item] : item;
    });
  }
}
