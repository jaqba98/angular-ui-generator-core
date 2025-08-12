import {
  RegisterViewDomainModel,
  registerViewDtoStore,
  TViewGenerator,
} from '@angular-ui-generator/shared';
import { Routes } from '@angular/router';

export const routes = (view: TViewGenerator): Routes => {
  const viewDomain = test(view);
  console.log(viewDomain);
  return [];
};

const test = (view: TViewGenerator): RegisterViewDomainModel => {
  const viewDto = registerViewDtoStore.find(
    (viewDto) => viewDto.target === view,
  );
  if (!viewDto) {
    throw new Error('Failed to find the dto view');
  }
  const domain: RegisterViewDomainModel = {
    name: viewDto.name,
    target: viewDto.target,
    children: [],
  };
  if (viewDto.children) {
    viewDto.children.forEach((dto) => domain.children.push(test(dto)));
  }
  return domain;
};
