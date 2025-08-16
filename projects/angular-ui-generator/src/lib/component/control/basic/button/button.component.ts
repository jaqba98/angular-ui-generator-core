import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-component-control-basic-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input.required<string>();
}
