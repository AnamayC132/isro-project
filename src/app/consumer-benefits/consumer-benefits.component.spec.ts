import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBenefitsComponent } from './consumer-benefits.component';

describe('GamingComponent', () => {
  let component: ConsumerBenefitsComponent;
  let fixture: ComponentFixture<ConsumerBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
