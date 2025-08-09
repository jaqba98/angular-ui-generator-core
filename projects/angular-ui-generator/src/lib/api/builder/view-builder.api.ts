import { Component, OnInit } from '@angular/core';
import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';
import { registerViewStoreDto } from '../../store/register/register-view.store';

@Component({
  selector: 'lib-view-builder',
  template: '',
})
export abstract class ViewBuilder implements OnInit, ViewBuilderAbstract {
  ngOnInit() {
    console.log(registerViewStoreDto);
    this.build();
  }

  abstract build(): void;
}
