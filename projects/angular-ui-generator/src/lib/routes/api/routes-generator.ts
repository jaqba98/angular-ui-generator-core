import { Routes } from '@angular/router';
import { ViewGeneratorType } from '../../generator';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { routesBuilder } from '../builder/routes.builder';

export const routesGenerator = (view: ViewGeneratorType): Routes => {
  const viewDomain = routesDomainBuilder(view);
  return routesBuilder(viewDomain);
};
