import {ViewBuilder} from '../../../builder/view.builder';

export interface RegisterViewDto {
  name: string;
  children?: typeof ViewBuilder[];
}
