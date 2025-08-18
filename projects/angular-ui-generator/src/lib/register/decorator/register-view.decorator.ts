import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { registerViewDtoStore } from '../store/dto/register-view-dto.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any) => {
    registerViewDtoStore.push({ ...arg, target });
  };
};
