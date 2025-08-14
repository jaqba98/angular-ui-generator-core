import { Component, input } from '@angular/core';
import { ButtonMetadataModel } from '../../model/metadata/button-metadata.model';

@Component({
  selector: 'lib-ui-component-button',
  template: '<button>{{ metadata().label }}</button>',
})
export class ButtonComponent {
  metadata = input.required<ButtonMetadataModel>();
}
