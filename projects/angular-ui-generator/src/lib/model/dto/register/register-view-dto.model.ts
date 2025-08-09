import { RegisterViewArgModel } from '../../arg/register/register-view-arg.model';
import { ViewBuilderAbstract } from '../../../abstract/view-builder.abstract';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: typeof ViewBuilderAbstract;
}
