import { ViewGenerator } from '../../generator';

export interface RoutesDomainModel {
  name: string;
  target: typeof ViewGenerator;
  children: RoutesDomainModel[];
}
