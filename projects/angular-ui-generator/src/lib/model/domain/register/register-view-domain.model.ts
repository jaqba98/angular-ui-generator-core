import { RegisterViewDtoModel } from '../../dto/register/register-view-dto.model';

export interface RegisterViewDomainModel
  extends Omit<RegisterViewDtoModel, 'children'> {
  children: RegisterViewDomainModel[];
}
