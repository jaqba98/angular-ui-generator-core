import {RegisterViewDtoModel} from '../model/register-view-dto.model';
import {ViewBuilder} from '../builder/view.builder';
import {registerViewDtoStore} from '../store/register-view-dto.store';

export function RegisterView(dto: Omit<RegisterViewDtoModel, 'target'>) {
  return function (target: typeof ViewBuilder) {
    registerViewDtoStore.push({ ...dto, target });
  }
}
