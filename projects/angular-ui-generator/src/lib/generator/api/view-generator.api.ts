import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ViewGeneratorAbstract } from '../../shared';
import { ViewElement } from '../model/view-element';
import { ButtonComponent } from '../../ui';

@Component({
  selector: 'lib-view-generator',
  template: '',
})
export abstract class ViewGenerator
  implements AfterViewInit, ViewGeneratorAbstract
{
  @ViewChild('generator', { read: ViewContainerRef })
  generator!: ViewContainerRef;

  ngAfterViewInit() {
    this.generator.clear();
    this.generate().forEach(() => {
      this.generator.createComponent(ButtonComponent);
    });
  }

  abstract generate(): ViewElement[];
}
