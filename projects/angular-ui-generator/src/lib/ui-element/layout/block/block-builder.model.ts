import { BlockComponent } from '../../../component';
import { UiElement } from '../../type/ui-element';
import { UiElementKindEnum } from '../../enum/ui-element-kind.enum';

export interface BlockBuilderModel {
  kind: UiElementKindEnum.block;
  component: typeof BlockComponent;
  children: UiElement[];
}
