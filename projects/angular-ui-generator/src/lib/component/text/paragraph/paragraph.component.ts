import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-component-text-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  text = input.required<string>();
}
