import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskWithDetailsComponent } from './ask-with-details.component';

describe('AskWithDetailsComponent', () => {
  let component: AskWithDetailsComponent;
  let fixture: ComponentFixture<AskWithDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskWithDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskWithDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
