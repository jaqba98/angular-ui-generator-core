import { RegisterViewArgModel } from '@angular-ui-generator/shared';
import { registerViewDecorator } from '../decorator/register-view.decorator';

export const RegisterView = (arg: RegisterViewArgModel) =>
  registerViewDecorator(arg);
