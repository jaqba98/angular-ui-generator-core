import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aug-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  imports: [RouterLink],
})
export class LinkComponent {
  path = input.required<string>();

  text = input.required<string>();
}
