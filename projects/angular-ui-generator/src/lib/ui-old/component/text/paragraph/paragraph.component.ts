import { Component, input } from '@angular/core';
import { ParagraphMetadataModel } from '../../../model/text/paragraph/paragraph-metadata.model';

@Component({
  selector: 'lib-ui-component-text-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  metadata = input.required<ParagraphMetadataModel>();
}
