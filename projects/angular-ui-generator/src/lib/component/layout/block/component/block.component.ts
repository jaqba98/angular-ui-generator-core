import { Component, input, ViewChild, ViewContainerRef } from '@angular/core';
import { BlockTagEnum } from '../enum/block-tag.enum';
import { BlockMetadataModel } from '../model/block-metadata.model';

@Component({
  selector: 'lib-component-layout-block',
  templateUrl: './block.component.html',
})
export class BlockComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  BlockTagEnum = BlockTagEnum;

  metadata = input.required<BlockMetadataModel>();
}
