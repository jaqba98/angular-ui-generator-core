import {ViewBuilder} from '../../../builder/view.builder';

export interface RegisterViewArgModel {
  name: string;
  children?: typeof ViewBuilder[];
}
