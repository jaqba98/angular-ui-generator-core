import { Component, OnInit } from '@angular/core';
import { ViewBuilderModel } from '../../model/builder/view-builder.model';

@Component({
  selector: 'lib-view-builder',
  template: '',
})
export abstract class ViewBuilder implements OnInit, ViewBuilderModel {
  ngOnInit() {
    this.build();
  }

  abstract build(): void;
}
