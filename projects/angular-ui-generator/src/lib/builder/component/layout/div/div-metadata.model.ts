import { ComponentMetadataType } from '../../../type/component-metadata.type';

export interface DivMetadataModel {
  kind: 'div';
  children: ComponentMetadataType[];
}
