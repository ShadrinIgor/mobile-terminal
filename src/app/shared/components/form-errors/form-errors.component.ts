import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

import formError from '../../../i18n/en/form.errors';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorsComponent {

  @Input() errors = {};

  parseErrors() {
    console.log('parseErrors');
    return Object.keys(this.errors).map((item: any) => {
      return formError[item] ? formError[item] : item;
    });
  }
}
