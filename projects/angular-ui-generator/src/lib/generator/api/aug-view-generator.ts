import {
  AfterViewInit,
  Component,
  inject,
  ViewContainerRef,
} from '@angular/core';
import { AugViewMetadata } from '../type/aug-view-metadata';
import {
  ButtonBuilder,
  DivBuilder,
  HeaderBuilder,
  LinkBuilder,
  ParagraphBuilder,
} from '../../builder';

@Component({
  selector: 'aug-view-generator',
  template: '',
})
export abstract class AugViewGenerator implements AfterViewInit {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly linkBuilder = inject(LinkBuilder);
  private readonly buttonBuilder = inject(ButtonBuilder);
  private readonly divBuilder = inject(DivBuilder);
  private readonly headerBuilder = inject(HeaderBuilder);
  private readonly paragraphBuilder = inject(ParagraphBuilder);

  abstract buildViewMetadata(): AugViewMetadata[];

  ngAfterViewInit(): void {
    this.generate(this.buildViewMetadata(), this.viewContainerRef);
  }

  private generate(
    augViewMetadata: AugViewMetadata[],
    container: ViewContainerRef,
  ) {
    augViewMetadata.forEach((metadata) => {
      const { kind } = metadata;
      switch (kind) {
        case 'link': {
          this.linkBuilder.build(container, metadata);
          break;
        }
        case 'button': {
          this.buttonBuilder.build(container, metadata);
          break;
        }
        case 'div': {
          const { component, children } = this.divBuilder.build(
            container,
            metadata,
          );
          this.generate(children, component.instance.container);
          break;
        }
        case 'header': {
          const { component, children } = this.headerBuilder.build(
            container,
            metadata,
          );
          this.generate(children, component.instance.container);
          break;
        }
        case 'paragraph': {
          this.paragraphBuilder.build(container, metadata);
          break;
        }
        default:
          throw new Error('Not supported kind');
      }
    });
  }
}
