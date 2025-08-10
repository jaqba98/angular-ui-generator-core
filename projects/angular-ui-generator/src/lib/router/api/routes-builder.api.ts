import { Routes } from '@angular/router';

import { ViewBuilderAbstract } from '../../generator/abstract/view-builder.abstract';
import { registerViewDomainBuilder } from '../builder/domain/register-view-domain.builder';

export const routesBuilder = (rootView: typeof ViewBuilderAbstract): Routes => {
  const viewDomain = registerViewDomainBuilder(rootView);
  console.log(viewDomain);
  return [];
};
