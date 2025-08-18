import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-component-layout-block',
  templateUrl: './block.component.html',
})
export class BlockComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
}
