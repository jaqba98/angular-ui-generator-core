import { UiElement } from '../../type/ui-element';
import { BlockBuilderModel } from './block-builder.model';
import { BlockComponent } from '../../../component';
import { UiElementKindEnum } from '../../enum/ui-element-kind.enum';

export class BlockBuilder {
  static build(children: UiElement[]): BlockBuilderModel {
    return {
      kind: UiElementKindEnum.block,
      component: BlockComponent,
      children,
    };
  }
}
