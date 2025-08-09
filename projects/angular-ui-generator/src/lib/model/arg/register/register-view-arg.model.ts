import { ViewBuilderModel } from '../../builder/view-builder.model';

export interface RegisterViewArgModel {
  name: string;
  children?: ViewBuilderModel[];
}
