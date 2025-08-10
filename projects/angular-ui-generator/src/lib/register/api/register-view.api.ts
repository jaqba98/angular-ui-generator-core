import { RegisterViewArgModel } from '../../shared/model/arg/register-view-arg.model';
import { registerViewDecorator } from '../decorator/register-view.decorator';

export const RegisterView = (arg: RegisterViewArgModel) =>
  registerViewDecorator(arg);
