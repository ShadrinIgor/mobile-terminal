import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {OperatorModel} from '../../models/operator.model';

@Component({
  selector: 'app-operator-card',
  templateUrl: './operator-card.component.html',
  styleUrls: ['./operator-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorCardComponent {
  @Input() operator: OperatorModel;
}
