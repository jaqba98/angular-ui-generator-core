import { Injectable, ViewContainerRef } from '@angular/core';
import { DivMetadataModel } from './div-metadata.model';
import { DivComponent } from '../../../../component';

@Injectable({ providedIn: 'root' })
export class DivBuilder {
  build(container: ViewContainerRef, metadata: DivMetadataModel) {
    const { children } = metadata;
    const component = container.createComponent(DivComponent);
    return { component, children };
  }
}
