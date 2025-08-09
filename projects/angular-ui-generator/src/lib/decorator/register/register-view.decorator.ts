import {RegisterViewDto} from '../../model/dto/register/register-view.dto';
import {ViewBuilder} from '../../builder/view.builder';

export function RegisterView(dto: RegisterViewDto) {
  return function (target: typeof ViewBuilder) {
    console.log('RegisterView', target, dto);
  }
}
