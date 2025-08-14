import { Routes } from '@angular/router';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { routesBuilder } from '../builder/routes.builder';
import { TViewGenerator } from '../../shared/type/generator.type';

export const routes = (view: TViewGenerator): Routes => {
  const viewDomain = routesDomainBuilder(view);
  const routes = routesBuilder(viewDomain);
  console.log(routes);
  return routes;
};
