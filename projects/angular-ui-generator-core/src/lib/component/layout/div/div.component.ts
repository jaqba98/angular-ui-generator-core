import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'aug-div',
  templateUrl: './div.component.html',
  styleUrl: './div.component.scss',
})
export class DivComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
}
