import { Component, OnInit } from '@angular/core';
import { registerViewDtoStore } from '../store/register-view-dto.store';

@Component({
  selector: 'lib-view-builder',
  template: '',
})
export abstract class ViewBuilder implements OnInit {
  ngOnInit() {
    console.log(registerViewDtoStore);
    this.build();
  }

  abstract build(): void;
}
