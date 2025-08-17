import { ButtonBuilderModel } from '../control/basic/button/button-builder.model';
import { BlockBuilderModel } from '../layout/block/block-builder.model';
import { ParagraphBuilderModel } from '../text/paragraph/paragraph-builder.model';

export type UiElement =
  | ButtonBuilderModel
  | BlockBuilderModel
  | ParagraphBuilderModel;
