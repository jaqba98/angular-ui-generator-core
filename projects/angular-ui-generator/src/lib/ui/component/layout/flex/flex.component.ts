import { Component, input } from '@angular/core';
import { FlexMetadataModel } from '../../../model/layout/flex/flex-metadata.model';

@Component({
  selector: 'lib-ui-component-layout-flex',
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
})
export class FlexComponent {
  metadata = input.required<FlexMetadataModel>();
}
