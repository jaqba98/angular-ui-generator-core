import {
  RegisterViewArgModel,
  registerViewDtoStore,
  TViewGenerator,
} from '@angular-ui-generator/shared';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: TViewGenerator) => {
    registerViewDtoStore.push({ ...arg, target });
  };
};
