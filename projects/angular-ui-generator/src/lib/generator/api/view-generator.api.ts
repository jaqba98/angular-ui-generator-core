import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-view-generator',
  template: '',
})
export abstract class ViewGenerator implements OnInit {
  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  abstract generate(): void;
}
