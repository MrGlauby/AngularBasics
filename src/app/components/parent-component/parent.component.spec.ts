import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenComponent } from './parent.component';

describe('ParenComponent', () => {
  let component: ParenComponent;
  let fixture: ComponentFixture<ParenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
