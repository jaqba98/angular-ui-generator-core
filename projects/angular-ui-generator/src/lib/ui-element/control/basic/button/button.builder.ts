import { ButtonBuilderModel } from './button-builder.model';
import { ButtonComponent } from '../../../../component';

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
