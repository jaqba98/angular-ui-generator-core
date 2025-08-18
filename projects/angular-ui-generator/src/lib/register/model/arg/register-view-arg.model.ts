import { ViewGenerator } from '../../../generator';

export interface RegisterViewArgModel {
  name: string;
  children?: (typeof ViewGenerator)[];
}
