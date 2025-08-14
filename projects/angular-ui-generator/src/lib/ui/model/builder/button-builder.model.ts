import { ButtonMetadataModel } from '../metadata/button-metadata.model';
import { ButtonComponentType } from '../../type/component.type';

export interface ButtonBuilderModel {
  component: ButtonComponentType;
  metadata: ButtonMetadataModel;
}
