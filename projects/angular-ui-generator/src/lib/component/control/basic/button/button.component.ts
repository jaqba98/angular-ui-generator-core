import { Component, input } from '@angular/core';
import { ButtonMetadataModel } from './button-metadata.model';

@Component({
  selector: 'lib-component-control-basic-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  metadata = input.required<ButtonMetadataModel>();
}
