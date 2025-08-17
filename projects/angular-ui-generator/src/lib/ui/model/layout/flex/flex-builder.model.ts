import { FlexComponent } from "../../../component/layout/flex/flex.component";
import { UiElement } from "../../../public-api";
import { FlexMetadataModel } from "./flex-metadata.model";

export interface FlexBuilderModel {
  component: typeof FlexComponent;
  metadata: FlexMetadataModel;
  children: UiElement[];
}
