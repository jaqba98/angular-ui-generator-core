import { ViewBuilderAbstract } from '../../../abstract/view-builder.abstract';

export interface RegisterViewArgModel {
  name: string;
  children?: (typeof ViewBuilderAbstract)[];
}
