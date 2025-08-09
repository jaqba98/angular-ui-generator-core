import { RegisterViewArgModel } from '../../model/arg/register/register-view-arg.model';
import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';
import { registerViewStoreDto } from '../../store/register/register-view.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof ViewBuilderAbstract) => {
    registerViewStoreDto.push({ ...arg, target });
  };
};
