import { RegisterViewArgModel } from '../../arg/register/register-view-arg.model';
import { ViewBuilderModel } from '../../builder/view-builder.model';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: ViewBuilderModel;
}
