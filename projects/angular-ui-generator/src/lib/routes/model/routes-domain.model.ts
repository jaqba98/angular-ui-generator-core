import { TViewGenerator } from '../../shared';

export interface RoutesDomainModel {
  name: string;
  target: TViewGenerator;
  children: RoutesDomainModel[];
}
