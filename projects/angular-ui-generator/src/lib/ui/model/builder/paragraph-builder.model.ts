import { ParagraphComponentType } from '../../type/component.type';
import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';

export interface ParagraphBuilderModel {
  component: ParagraphComponentType;
  metadata: ParagraphMetadataModel;
}
