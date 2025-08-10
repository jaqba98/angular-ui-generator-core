import { ViewElement } from '../api/builder/view-element.api';

export abstract class ViewBuilderAbstract {
  abstract build(): ViewElement[];
}
