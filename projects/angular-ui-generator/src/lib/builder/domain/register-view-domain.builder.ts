import { registerViewStoreDto } from '../../store/register/register-view.store';
import { RegisterViewDomainModel } from '../../model/domain/register/register-view-domain.model';
import { ViewBuilderAbstract } from '../../abstract/view-builder.abstract';

export const registerViewDomainBuilder = (
  rootView: typeof ViewBuilderAbstract,
): RegisterViewDomainModel => {
  const currView = registerViewStoreDto.find(
    (view) => view.target === rootView,
  );
  if (!currView) {
    throw new Error('aaa');
  }
  const domain: RegisterViewDomainModel = {
    name: currView.name,
    target: currView.target,
    children: [],
  };
  currView.children?.forEach((child) => {
    domain.children.push(registerViewDomainBuilder(child));
  });
  return domain;
};
