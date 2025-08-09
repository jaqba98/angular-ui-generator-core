import {registerViewDecorator} from '../../decorator/register/register-view.decorator';
import {RegisterViewArgModel} from '../../model/arg/register/register-view-arg.model';

export const RegisterView = (arg: RegisterViewArgModel) => registerViewDecorator(arg);
