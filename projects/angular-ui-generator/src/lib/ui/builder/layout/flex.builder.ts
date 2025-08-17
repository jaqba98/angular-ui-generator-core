import { FlexComponent } from "../../component/layout/flex/flex.component";
import { FlexBuilderModel } from "../../model/layout/flex/flex-builder.model";

export class FlexBuilder {
  static build(): FlexBuilderModel {
    return {
      component: FlexComponent,
      metadata: {},
    };
  }
}
