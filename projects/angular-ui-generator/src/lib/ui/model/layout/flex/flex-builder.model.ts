import { FlexComponent } from "../../../component/layout/flex/flex.component";
import { FlexMetadataModel } from "./flex-metadata.model";

export interface FlexBuilderModel {
  component: typeof FlexComponent;
  metadata: FlexMetadataModel;
}
