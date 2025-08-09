import { RegisterViewArgModel } from '../../model/arg/register/register-view-arg.model';
import { ViewBuilderModel } from '../../model/builder/view-builder.model';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: ViewBuilderModel) => {
    console.log(arg, target);
  };
};
