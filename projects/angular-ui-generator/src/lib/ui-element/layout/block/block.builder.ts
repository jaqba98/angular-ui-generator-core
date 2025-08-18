import { UiElement } from '../../type/ui-element';
import { BlockBuilderModel } from './block-builder.model';
import { BlockComponent } from '../../../component';

export class BlockBuilder {
  static build(children: UiElement[]): BlockBuilderModel {
    return {
      component: BlockComponent,
      children,
    };
  }
}
