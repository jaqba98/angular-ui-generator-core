import { ViewGeneratorAbstract } from '../../shared';

export interface RoutesDomainModel {
  name: string;
  target: typeof ViewGeneratorAbstract;
  children: RoutesDomainModel[];
}
