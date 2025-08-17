import { BlockComponent } from '../../../component';
import { UiElement } from '../../type/ui-element';
import { BlockBuilderModel } from './block-builder.model';

export class BlockBuilder {
  static build(children: UiElement[]): BlockBuilderModel {
    return {
      component: BlockComponent,
      metadata: {},
      children,
    };
  }
}
