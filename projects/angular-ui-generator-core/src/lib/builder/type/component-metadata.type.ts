import { ButtonMetadataModel } from '../component/control/basic/button/button-metadata.model';
import { ParagraphMetadataModel } from '../component/text/paragraph/paragraph-metadata.model';
import { LinkMetadataModel } from '../component/common/link/link-metadata.model';
import { DivMetadataModel } from '../component/layout/div/div-metadata.model';
import { HeaderMetadataModel } from '../component/layout/header/header-metadata.model';

export type ComponentMetadataType =
  | LinkMetadataModel
  | ButtonMetadataModel
  | DivMetadataModel
  | HeaderMetadataModel
  | ParagraphMetadataModel;
