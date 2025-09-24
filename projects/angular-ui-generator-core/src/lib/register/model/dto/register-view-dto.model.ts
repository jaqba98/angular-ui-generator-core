import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { ViewGeneratorType } from '../../../generator';

export interface RegisterViewDtoModel {
  arg: RegisterViewArgModel;
  target: ViewGeneratorType;
}
