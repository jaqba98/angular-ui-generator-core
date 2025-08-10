import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { TViewGenerator } from '../../shared/type/generator.type';
import { registerViewDtoStore } from '../store/register-view-dto.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: TViewGenerator) => {
    registerViewDtoStore.push({ ...arg, target });
  };
};
