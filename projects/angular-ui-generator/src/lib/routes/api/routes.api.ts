import { Routes } from '@angular/router';
import { TViewGenerator } from '../../shared';
import { routesDomainBuilder } from '../builder/routes-domain.builder';

export const routes = (view: TViewGenerator): Routes => {
  const viewDomain = routesDomainBuilder(view);
  console.log(viewDomain);
  return [];
};
