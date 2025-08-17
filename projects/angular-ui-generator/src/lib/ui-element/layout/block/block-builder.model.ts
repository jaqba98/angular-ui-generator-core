import { BlockComponent, BlockMetadataModel } from '../../../component';
import { UiElement } from '../../type/ui-element';

export interface BlockBuilderModel {
  component: typeof BlockComponent;
  metadata: BlockMetadataModel;
  children: UiElement[];
}
