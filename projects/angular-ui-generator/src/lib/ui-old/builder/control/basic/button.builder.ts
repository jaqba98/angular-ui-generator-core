import { ButtonComponent } from '../../../component/control/basic/button/button.component';
import { ButtonBuilderModel } from '../../../model/control/basic/button/button-builder.model';

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
