import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { ViewGenerator } from '../../../generator';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: typeof ViewGenerator;
}
