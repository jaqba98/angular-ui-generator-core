import { RoutesDomainModel } from '../model/routes-domain.model';
import { Route, Routes } from '@angular/router';
import { AnyType } from '../../shared';

export const angularRoutesBuilder = (
  routesDomain: RoutesDomainModel[],
): Routes => {
  return routesDomain
    .slice()
    .sort((routeDomainA, routeDomainB) => {
      const routePathA = routeDomainA.route.arg.path ?? '';
      const routePathB = routeDomainB.route.arg.path ?? '';
      const redirectA = !!routeDomainA.route.arg.redirectTo;
      const redirectB = !!routeDomainB.route.arg.redirectTo;
      if (redirectA && !redirectB) return -1;
      if (!redirectA && redirectB) return 1;
      if (routePathA === '**' && routePathB !== '**') return 1;
      if (routePathA !== '**' && routePathB === '**') return -1;
      return routePathA.localeCompare(routePathB);
    })
    .map((routeDomain) => {
      const route: Route = {
        component: routeDomain.route.arg.redirectTo
          ? undefined
          : (routeDomain.route.target as AnyType),
        path: routeDomain.route.arg.path,
        redirectTo: routeDomain.route.arg.redirectTo,
        title: routeDomain.route.arg.title,
        children: routeDomain.route.arg.redirectTo
          ? undefined
          : angularRoutesBuilder(routeDomain.children),
        pathMatch: routeDomain.route.arg.redirectTo ? 'full' : 'prefix',
      };
      return route;
    });
};
