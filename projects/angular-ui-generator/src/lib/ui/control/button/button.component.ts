import { Component, input } from '@angular/core';
import { ButtonMetadataModel } from '../../model/metadata/button-metadata.model';

@Component({
  selector: 'lib-ui-control-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  metadata = input<ButtonMetadataModel>({ label: '' });
}
