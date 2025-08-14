import { UiElement } from '../../../ui';

export abstract class ViewGeneratorAbstract {
  abstract generate(): UiElement[];
}
