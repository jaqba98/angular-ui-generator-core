import { Injectable } from '@angular/core';
import { ParagraphBuilderModel } from '../model/builder/paragraph-builder.model';
import { ParagraphComponent } from '../component/text/paragraph/paragraph.component';

@Injectable({ providedIn: 'root' })
export class ParagraphBuilder {
  static build(label: string): ParagraphBuilderModel {
    return {
      component: ParagraphComponent,
      metadata: {
        label,
      },
    };
  }
}
