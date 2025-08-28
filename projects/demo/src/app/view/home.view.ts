import { Component } from '@angular/core';
import {
  AugRegisterView,
  AugRegisterRoute,
  AugViewGenerator,
  AugViewMetadata,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-home-view',
  template: '',
})
@AugRegisterView({
  name: 'home',
  children: [],
})
@AugRegisterRoute({
  path: 'home',
  title: 'Home',
})
export class HomeView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'header',
        children: [
          {
            kind: 'paragraph',
            text: 'This is home page',
          },
        ],
      },
      {
        kind: 'div',
        children: [
          {
            kind: 'link',
            path: '/home',
            text: 'Home',
          },
          {
            kind: 'link',
            path: '/about',
            text: 'About',
          },
        ],
      },
    ];
  }
}
