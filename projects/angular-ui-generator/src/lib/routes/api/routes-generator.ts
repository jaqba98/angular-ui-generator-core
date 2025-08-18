import { Routes } from '@angular/router';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { routesBuilder } from '../builder/routes.builder';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const routesGenerator = (view: any): Routes => {
  const viewDomain = routesDomainBuilder(view);
  return routesBuilder(viewDomain);
};
