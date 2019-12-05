import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypComponent } from './modifyp.component';

describe('ModifypComponent', () => {
  let component: ModifypComponent;
  let fixture: ComponentFixture<ModifypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
