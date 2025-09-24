import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'aug-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
}
