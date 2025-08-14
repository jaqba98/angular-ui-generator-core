import { Component, input } from '@angular/core';
import { ParagraphMetadataModel } from '../../model/metadata/paragraph-metadata.model';

@Component({
  selector: 'lib-ui-component-paragraph',
  template: '<p>{{ metadata().label }}</p>',
})
export class ParagraphComponent {
  metadata = input.required<ParagraphMetadataModel>();
}
