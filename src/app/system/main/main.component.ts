import { Component, OnInit } from '@angular/core';

import constants from '../../constants';
import {OperatorModel} from '../../shared/models/operator.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listOperators: OperatorModel[] = [];
  constructor() { }

  ngOnInit() {
    this.listOperators = constants.operators;
  }

}
