import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { UiElement } from '../../ui';

@Component({
  selector: 'lib-generator-api-view-generator',
  template: '',
})
export abstract class ViewGenerator implements AfterViewInit {
  @ViewChild('viewGenerator', { read: ViewContainerRef })
  viewGenerator!: ViewContainerRef;

  ngAfterViewInit() {
    this.viewGenerator.clear();
    this.generate().forEach((uiElement) => {
      const { component, metadata } = uiElement;
      const newComponent = this.viewGenerator.createComponent(component);
      newComponent.setInput('metadata', metadata);
    });
  }

  abstract generate(): UiElement[];
}
