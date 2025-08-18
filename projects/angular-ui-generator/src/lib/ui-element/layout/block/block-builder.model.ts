import { BlockComponent } from '../../../component';
import { UiElement } from '../../type/ui-element';

export interface BlockBuilderModel {
  component: typeof BlockComponent;
  children: UiElement[];
}
