import { ButtonMetadataModel } from './button-metadata.model';
import { ButtonComponent } from '../../../../component/control/basic/button/button.component';

export interface ButtonBuilderModel {
  component: typeof ButtonComponent;
  metadata: ButtonMetadataModel;
}
