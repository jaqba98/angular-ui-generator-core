import { ParagraphComponent, ParagraphMetadataModel } from '../../../component';

export interface ParagraphBuilderModel {
  component: typeof ParagraphComponent;
  metadata: ParagraphMetadataModel;
}
