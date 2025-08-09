import {RegisterViewDto} from '../../model/dto/register-view.dto';

export function RegisterView(dto: RegisterViewDto) {
  return function (target: Function) {
    console.log('RegisterView', target, dto);
  }
}
