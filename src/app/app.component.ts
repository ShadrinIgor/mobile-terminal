import { Component } from '@angular/core';
import {BodyOutputType, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  template: '1<toaster-container [toasterconfig]="toasterconfig"></toaster-container>2<router-outlet></router-outlet>'
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
