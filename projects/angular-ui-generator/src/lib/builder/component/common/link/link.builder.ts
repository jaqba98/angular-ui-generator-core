import { Injectable, ViewContainerRef } from '@angular/core';
import { LinkMetadataModel } from './link-metadata.model';
import { LinkComponent } from '../../../../component';

@Injectable({ providedIn: 'root' })
export class LinkBuilder {
  build(container: ViewContainerRef, metadata: LinkMetadataModel) {
    const { path, text } = metadata;
    const component = container.createComponent(LinkComponent);
    component.setInput('path', path);
    component.setInput('text', text);
  }
}
