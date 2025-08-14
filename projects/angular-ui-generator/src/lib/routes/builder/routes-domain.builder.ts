import { RoutesDomainModel } from '../model/routes-domain.model';
import { registerViewDtoStore } from '../../shared/store/dto/register-view-dto.store';
import { TViewGenerator } from '../../shared/type/generator.type';

export const routesDomainBuilder = (
  view: TViewGenerator,
): RoutesDomainModel => {
  const viewDto = registerViewDtoStore.find(
    (viewDto) => viewDto.target === view,
  );
  if (!viewDto) {
    throw new Error('Failed to find the dto view');
  }
  const domain: RoutesDomainModel = {
    name: viewDto.name,
    target: viewDto.target,
    children: [],
  };
  if (viewDto.children) {
    viewDto.children.forEach((dto) =>
      domain.children.push(routesDomainBuilder(dto)),
    );
  }
  return domain;
};
