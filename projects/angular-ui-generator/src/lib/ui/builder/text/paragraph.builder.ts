import { ParagraphComponent } from '../../component/text/paragraph/paragraph.component';
import { ParagraphBuilderModel } from '../../model/text/paragraph/paragraph-builder.model';

export class ParagraphBuilder {
  static build(text: string): ParagraphBuilderModel {
    return {
      component: ParagraphComponent,
      metadata: {
        text,
      },
    };
  }
}
