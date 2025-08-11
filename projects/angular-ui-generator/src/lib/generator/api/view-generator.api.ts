import { Component, OnInit } from '@angular/core';
import { ViewGeneratorAbstract } from '@angular-ui-generator/shared';

@Component({
  selector: 'lib-view-generator',
  template: '',
})
export abstract class ViewGenerator implements OnInit, ViewGeneratorAbstract {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  abstract generate(): void;
}
