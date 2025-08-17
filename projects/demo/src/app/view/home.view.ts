import { Component } from '@angular/core';

import {
  ButtonBuilder,
  FlexBuilder,
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
      FlexBuilder.build([
        ButtonBuilder.build('Hello1'),
        ButtonBuilder.build('Hello2'),
        FlexBuilder.build([
          ButtonBuilder.build('Hello3'),
          ButtonBuilder.build('Hello4'),
        ]),
        ButtonBuilder.build('Hello5'),
        ButtonBuilder.build('Hello6'),
      ]),
    ];
  }
}
