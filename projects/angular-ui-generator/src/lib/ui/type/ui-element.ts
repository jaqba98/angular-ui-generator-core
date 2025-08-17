import { ButtonBuilderModel } from '../model/control/basic/button/button-builder.model';
import { FlexBuilderModel } from '../model/layout/flex/flex-builder.model';
import { ParagraphBuilderModel } from '../model/text/paragraph/paragraph-builder.model';

export type UiElement = ButtonBuilderModel | ParagraphBuilderModel | FlexBuilderModel;
