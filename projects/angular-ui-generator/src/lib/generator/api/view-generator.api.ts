import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ViewGeneratorAbstract } from '../../shared';
import { TViewElement } from '../model/view-element';

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
    this.generate().forEach((el) => {
      const aa = this.generator.createComponent(el.component);
      aa.instance.metadata().label = el.metadata.label;
    });
  }

  abstract generate(): TViewElement[];
}
