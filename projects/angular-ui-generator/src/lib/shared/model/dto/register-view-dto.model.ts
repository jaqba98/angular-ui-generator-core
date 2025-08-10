import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { TViewGenerator } from '../../type/generator.type';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: TViewGenerator;
}
