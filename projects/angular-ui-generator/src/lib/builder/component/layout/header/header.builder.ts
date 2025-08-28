import { Injectable, ViewContainerRef } from '@angular/core';
import { HeaderMetadataModel } from './header-metadata.model';
import { HeaderComponent } from '../../../../component';

@Injectable({ providedIn: 'root' })
export class HeaderBuilder {
  build(container: ViewContainerRef, metadata: HeaderMetadataModel) {
    const { children } = metadata;
    const component = container.createComponent(HeaderComponent);
    return { component, children };
  }
}
