import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MumComponent } from './mum.component';

describe('MumComponent', () => {
  let component: MumComponent;
  let fixture: ComponentFixture<MumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
