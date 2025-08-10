import { Routes } from '@angular/router';

import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';
import { registerViewStoreDto } from '../../store/register/register-view.store';

export const routesBuilder = (rootView: typeof ViewBuilderAbstract): Routes => {
  console.log(rootView);
  console.log(registerViewStoreDto);
  return [];
};
