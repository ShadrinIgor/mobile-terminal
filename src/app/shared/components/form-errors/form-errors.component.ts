import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import formError from '../../../i18n/en/form.errors';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorsComponent {
  @Input() errors = {};
  @Input() field: string;

  parseErrors() {
    console.log('parseErrors');
    return Object.keys(this.errors).map((item: any) => {
      const fullKey = `${this.field}-${item}`;
      return formError[fullKey] ? formError[fullKey] : formError[item] ? formError[item] : `${this.field}-${item}`;
    });
  }
}
