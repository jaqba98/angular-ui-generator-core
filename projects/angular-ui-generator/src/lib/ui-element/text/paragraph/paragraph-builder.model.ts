import { ParagraphComponent, ParagraphMetadataModel } from '../../../component';
import { UiElementKindEnum } from '../../enum/ui-element-kind.enum';

export interface ParagraphBuilderModel {
  kind: UiElementKindEnum.paragraph;
  component: typeof ParagraphComponent;
  metadata: ParagraphMetadataModel;
}
