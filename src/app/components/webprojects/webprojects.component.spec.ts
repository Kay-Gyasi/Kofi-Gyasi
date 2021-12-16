import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebprojectsComponent } from './webprojects.component';

describe('WebprojectsComponent', () => {
  let component: WebprojectsComponent;
  let fixture: ComponentFixture<WebprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
