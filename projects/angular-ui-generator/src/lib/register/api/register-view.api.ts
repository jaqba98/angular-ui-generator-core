import { registerViewDecorator } from '../decorator/register-view.decorator';
import { RegisterViewArgModel } from '../../shared/model/arg/register-view-arg.model';

export const RegisterView = (arg: RegisterViewArgModel) =>
  registerViewDecorator(arg);
