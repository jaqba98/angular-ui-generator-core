import { Component } from '@angular/core';
import {
  AugRegisterView,
  AugRegisterRoute,
  AugViewGenerator,
  AugViewMetadata,
} from '../../../../angular-ui-generator-core/src/public-api';

@Component({
  selector: 'app-root-view',
  template: '',
})
@AugRegisterView({
  name: 'root',
  children: [],
})
@AugRegisterRoute({
  path: '',
  redirectTo: 'home',
})
export class RootView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [];
  }
}
