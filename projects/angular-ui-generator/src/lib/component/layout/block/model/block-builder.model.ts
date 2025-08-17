import { BlockComponent } from '../component/block.component';
import { BlockMetadataModel } from './block-metadata.model';

export interface BlockBuilderModel {
  kind: 'block';
  component: typeof BlockComponent,
  metadata: BlockMetadataModel;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[];
}
