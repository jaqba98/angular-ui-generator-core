import { Component, OnInit } from '@angular/core';

import { ViewGeneratorAbstract } from '../../shared/abstract/view-generator.abstract';

@Component({
  selector: 'lib-view-view.generator.ts',
  template: '',
})
export abstract class ViewGenerator implements OnInit, ViewGeneratorAbstract {
  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  abstract generate(): void;
}
