import { BlockMetadataModel } from './block-metadata.model';

export interface BlockBuilderModel {
  kind: 'block';
  metadata: BlockMetadataModel;
}

// export interface FlexBuilderModel {
//   component: typeof FlexComponent;
//   metadata: FlexMetadataModel;
//   children: UiElement[];
// }
