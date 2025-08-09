import { RegisterViewArgModel } from '../../model/arg/register/register-view-arg.model';
import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof ViewBuilderAbstract) => {
    console.log(arg, target);
  };
};
