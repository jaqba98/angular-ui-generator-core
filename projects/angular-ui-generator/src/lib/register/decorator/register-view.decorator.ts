import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { TViewGenerator } from '../type/generator.type';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: TViewGenerator) => {
    console.log(arg, target);
  };
};

// export const registerViewDecorator = (arg: RegisterViewArgModel) => {
//   return (target: typeof ViewBuilderAbstract) => {
//     registerViewStoreDto.push({ ...arg, target });
//   };
// };
