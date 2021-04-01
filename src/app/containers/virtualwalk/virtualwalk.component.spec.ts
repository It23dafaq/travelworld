import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualwalkComponent } from './virtualwalk.component';

describe('VirtualwalkComponent', () => {
  let component: VirtualwalkComponent;
  let fixture: ComponentFixture<VirtualwalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualwalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualwalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
