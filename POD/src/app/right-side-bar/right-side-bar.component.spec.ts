import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBarComponent } from './right-side-bar.component';

describe('RightSideBarComponent', () => {
  let component: RightSideBarComponent;
  let fixture: ComponentFixture<RightSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideBarComponent]
    });
    fixture = TestBed.createComponent(RightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
