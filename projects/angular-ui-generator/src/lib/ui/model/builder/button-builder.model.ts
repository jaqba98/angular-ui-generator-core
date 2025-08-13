import { ButtonComponent } from '../../control/button/button.component';
import { ButtonMetadataModel } from '../metadata/button-metadata.model';

export interface ButtonBuilderModel {
  component: typeof ButtonComponent;
  metadata: ButtonMetadataModel;
}
