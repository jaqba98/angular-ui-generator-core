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
  @ViewChild('template', { read: ViewContainerRef })
  template!: ViewContainerRef;

  static viewTemplate() {
    return '<ng-content #template></ng-content>';
  }

  ngAfterViewInit() {
    this.template.clear();
    this.generate().forEach((uiElement) => {
      const { component, metadata } = uiElement;
      const newComponent = this.template.createComponent(component);
      newComponent.setInput('metadata', metadata);
    });
  }

  abstract generate(): UiElement[];
}
