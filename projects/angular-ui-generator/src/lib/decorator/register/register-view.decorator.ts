import { RegisterViewArgModel } from '../../model/arg/register/register-view-arg.model';
import { ViewBuilder } from '../../builder/view.builder';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof ViewBuilder) => {
    console.log(arg, target);
  };
};
