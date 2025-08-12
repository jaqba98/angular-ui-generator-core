import { Routes } from '@angular/router';
import { TViewGenerator } from '../../shared';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { routesBuilder } from '../builder/routes.builder';

export const routes = (view: TViewGenerator): Routes => {
  const viewDomain = routesDomainBuilder(view);
  const routes = routesBuilder(viewDomain);
  console.log(routes);
  return routes;
};
