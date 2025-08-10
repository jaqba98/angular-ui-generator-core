import { RegisterViewDtoModel } from '../dto/register-view-dto.model';

export interface RegisterViewDomainModel
  extends Omit<RegisterViewDtoModel, 'children'> {
  children: RegisterViewDomainModel[];
}
