import { FlexComponent } from "../../component/layout/flex/flex.component";
import { FlexBuilderModel } from "../../model/layout/flex/flex-builder.model";
import { UiElement } from "../../public-api";

export class FlexBuilder {
  static build(children: UiElement[]): FlexBuilderModel {
    return {
      component: FlexComponent,
      metadata: {},
      children
    };
  }
}
