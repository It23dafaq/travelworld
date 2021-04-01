import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbxdialogComponent } from './fbxdialog.component';

describe('FbxdialogComponent', () => {
  let component: FbxdialogComponent;
  let fixture: ComponentFixture<FbxdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbxdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbxdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
