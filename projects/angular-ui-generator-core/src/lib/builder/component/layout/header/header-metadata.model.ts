import { ComponentMetadataType } from '../../../type/component-metadata.type';

export interface HeaderMetadataModel {
  kind: 'header';
  children: ComponentMetadataType[];
}
