import { Component } from '@angular/core';

import {
  ButtonBuilder,
  RegisterView,
  UiElement,
  ViewGenerator,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-home-view',
  template: '<ng-template #viewGenerator></ng-template>',
})
@RegisterView({
  name: 'home',
  children: [],
})
export class HomeView extends ViewGenerator {
  override generate(): UiElement[] {
    return [
      ButtonBuilder.build('Hello')
    ];
  }
}
