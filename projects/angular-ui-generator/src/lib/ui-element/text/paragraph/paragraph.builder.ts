import { ParagraphComponent } from '../../../component';
import { ParagraphBuilderModel } from './paragraph-builder.model';

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
