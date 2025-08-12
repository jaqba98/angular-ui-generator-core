import { Component, OnInit } from '@angular/core';
import { ViewGeneratorAbstract } from '../../shared';
import { ViewElement } from '../model/view-element';

@Component({
  selector: 'lib-view-generator',
  template: '',
})
export abstract class ViewGenerator implements OnInit, ViewGeneratorAbstract {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  abstract generate(): ViewElement[];
}
