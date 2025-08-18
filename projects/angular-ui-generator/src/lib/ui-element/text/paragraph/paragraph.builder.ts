import { ParagraphComponent } from '../../../component';
import { ParagraphBuilderModel } from './paragraph-builder.model';
import { UiElementKindEnum } from '../../enum/ui-element-kind.enum';

export class ParagraphBuilder {
  static build(text: string): ParagraphBuilderModel {
    return {
      kind: UiElementKindEnum.paragraph,
      component: ParagraphComponent,
      metadata: {
        text,
      },
    };
  }
}
