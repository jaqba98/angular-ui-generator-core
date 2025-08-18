import { ButtonBuilderModel } from './button-builder.model';
import { ButtonComponent } from '../../../../component';
import { UiElementKindEnum } from '../../../enum/ui-element-kind.enum';

export class ButtonBuilder {
  static build(label: string): ButtonBuilderModel {
    return {
      kind: UiElementKindEnum.button,
      component: ButtonComponent,
      metadata: {
        label,
      },
    };
  }
}
