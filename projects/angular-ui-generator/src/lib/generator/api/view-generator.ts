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
    this.aaa(this.generate(), this.viewGenerator);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aaa(aa: any[], container: ViewContainerRef) {
    aa.forEach((i) => {
      const { component, metadata, children } = i;
      const newComponent = container.createComponent(component);
      newComponent.setInput('metadata', metadata);
      if (children && children.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const childContainer = (newComponent.instance as any).viewGenerator;
        this.aaa(children, childContainer);
      }
    });
  }

  abstract generate(): UiElement[];
}
