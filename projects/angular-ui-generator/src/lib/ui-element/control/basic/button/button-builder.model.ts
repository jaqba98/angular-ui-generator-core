import { ButtonComponent, ButtonMetadataModel } from '../../../../component';
import { UiElementKindEnum } from '../../../enum/ui-element-kind.enum';

export interface ButtonBuilderModel {
  kind: UiElementKindEnum.button;
  component: typeof ButtonComponent;
  metadata: ButtonMetadataModel;
}
