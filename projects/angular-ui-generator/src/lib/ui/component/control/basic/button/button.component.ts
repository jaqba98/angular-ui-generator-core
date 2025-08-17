import { Component, input } from '@angular/core';
import { ButtonMetadataModel } from '../../../../model/control/basic/button/button-metadata.model';

@Component({
  selector: 'lib-ui-component-control-basic-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  metadata = input.required<ButtonMetadataModel>();
}
