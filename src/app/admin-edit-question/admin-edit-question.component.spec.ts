import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditQuestionComponent } from './admin-edit-question.component';

describe('AdminEditQuestionComponent', () => {
  let component: AdminEditQuestionComponent;
  let fixture: ComponentFixture<AdminEditQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
