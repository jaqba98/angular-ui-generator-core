import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { ViewGeneratorType } from '../../generator';
import { registerViewDtoStore } from '../store/dto/register-view-dto.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: ViewGeneratorType) => {
    registerViewDtoStore.push({ ...arg, target });
  };
};
