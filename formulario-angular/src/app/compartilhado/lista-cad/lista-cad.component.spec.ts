import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaCadComponent } from './lista-cad.component';

describe('ListaCadComponent', () => {
  let component: ListaCadComponent;
  let fixture: ComponentFixture<ListaCadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
