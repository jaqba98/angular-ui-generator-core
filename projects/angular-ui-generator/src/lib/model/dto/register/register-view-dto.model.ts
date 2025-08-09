import {RegisterViewArgModel} from '../../arg/register/register-view-arg.model';
import {ViewBuilder} from '../../../builder/view.builder';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: typeof ViewBuilder;
}
