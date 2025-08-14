import { Injectable } from '@angular/core';
import { ButtonBuilderModel } from '../model/builder/button-builder.model';
import { ButtonComponent } from '../control/button/button.component';
import { ButtonMetadataModel } from '../model/metadata/button-metadata.model';

@Injectable({ providedIn: 'root' })
export class ButtonBuilder {
  static build(metadata: ButtonMetadataModel): ButtonBuilderModel {
    return {
      component: ButtonComponent,
      metadata,
    };
  }
}
