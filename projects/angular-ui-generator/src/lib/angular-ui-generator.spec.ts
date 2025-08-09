import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUiGenerator } from './angular-ui-generator';

describe('AngularUiGenerator', () => {
  let component: AngularUiGenerator;
  let fixture: ComponentFixture<AngularUiGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularUiGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularUiGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
