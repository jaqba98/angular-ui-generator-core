import { Component, OnInit } from '@angular/core';

import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';
import { ViewElement } from './view-element.api';

@Component({
  selector: 'lib-view-builder',
  template: '',
})
export abstract class ViewBuilder implements OnInit, ViewBuilderAbstract {
  ngOnInit() {
    this.build();
  }

  abstract build(): ViewElement[];
}
