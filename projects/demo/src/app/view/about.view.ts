import { Component } from '@angular/core';
import {
  AugRegisterView,
  AugRegisterRoute,
  AugViewGenerator,
  AugViewMetadata,
} from '../../../../angular-ui-generator-core/src/public-api';

@Component({
  selector: 'app-about-view',
  template: '',
})
@AugRegisterView({
  name: 'about',
  children: [],
})
@AugRegisterRoute({
  path: 'about',
  title: 'About',
})
export class AboutView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'header',
        children: [
          {
            kind: 'paragraph',
            text: 'This is about page',
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
