import {ViewBuilder} from '../builder/view.builder';

export interface RegisterViewDtoModel {
  name: string;
  children?: typeof ViewBuilder[];
  target: typeof ViewBuilder;
}
