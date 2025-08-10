import { RegisterViewDtoModel } from '../../shared/model/dto/register-view-dto.model';

export interface RegisterViewDomainModel
  extends Omit<RegisterViewDtoModel, 'children'> {
  children: RegisterViewDomainModel[];
}
