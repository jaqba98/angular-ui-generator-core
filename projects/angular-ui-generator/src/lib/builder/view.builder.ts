import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-view-builder',
  template: ''
})
export abstract class ViewBuilder implements OnInit {
  ngOnInit() {
    this.build();
  }

  abstract build(): void;
}
