import { Component, OnInit } from '@angular/core';

import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';
import { GeneratorDtoModel } from '../../model/dto/generator/generator-dto.model';

@Component({
  selector: 'lib-view-builder',
  template: '',
})
export abstract class ViewBuilder implements OnInit, ViewBuilderAbstract {
  ngOnInit() {
    this.build();
  }

  abstract build(): GeneratorDtoModel[];
}
