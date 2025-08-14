import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { ViewGeneratorType } from '../../../generator';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: ViewGeneratorType;
}
