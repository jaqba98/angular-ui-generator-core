import {
  RegisterViewArgModel,
  registerViewDtoStore,
  TViewGenerator,
} from '../../shared';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: TViewGenerator) => {
    registerViewDtoStore.push({ ...arg, target });
  };
};
