import { registerViewDecorator } from '../decorator/register-view.decorator';
import { RegisterViewArgModel } from '../../shared';

export const RegisterView = (arg: RegisterViewArgModel) =>
  registerViewDecorator(arg);
