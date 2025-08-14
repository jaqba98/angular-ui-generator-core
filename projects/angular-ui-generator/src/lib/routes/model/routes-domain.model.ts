import { ViewGeneratorType } from '../../generator';

export interface RoutesDomainModel {
  name: string;
  target: ViewGeneratorType;
  children: RoutesDomainModel[];
}
