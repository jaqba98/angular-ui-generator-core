import { Injectable } from '@angular/core';
import { ButtonBuilderModel } from '../model/builder/button-builder.model';
import { ButtonComponent } from '../../component/control/basic/button/button.component';

@Injectable({ providedIn: 'root' })
export class ButtonBuilder {
  static build(label: string): ButtonBuilderModel {
    return {
      component: ButtonComponent,
      metadata: {
        label,
      },
    };
  }
}
