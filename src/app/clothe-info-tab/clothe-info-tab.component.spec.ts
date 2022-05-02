import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheInfoTabComponent } from './clothe-info-tab.component';

describe('ClotheInfoTabComponent', () => {
  let component: ClotheInfoTabComponent;
  let fixture: ComponentFixture<ClotheInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClotheInfoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
