import { Component } from '@angular/core';
import {BodyOutputType, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  template: '<toaster-container [toasterconfig]="toasterconfig"></toaster-container><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';
  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: false,
      timeout: 5000,
      animation: 'flyRight',
      bodyOutputType: BodyOutputType.TrustedHtml
    });
}
